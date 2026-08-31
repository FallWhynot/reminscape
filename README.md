# reminscape — Next.js + Supabase

Dark editorial blog with a real Postgres backend (Supabase) and a
password-protected admin editor. Public visitors can read posts and post
comments; only your one allow-listed admin account can publish or delete.

## Stack

- Next.js 14 (App Router, Server Components, Server Actions)
- Supabase (Postgres + Auth) via `@supabase/ssr`
- Tailwind CSS for the dark editorial design system

## How the security model works

Three layers, each independently enforcing the same rule ("only the admin
can write posts"):

1. **Middleware** (`lib/supabase/middleware.ts`) — fast redirect to
   `/admin/login` if there's no session at all.
2. **`app/admin/(protected)/layout.tsx`** — the authoritative check. Confirms
   there's a logged-in user *and* that their id is in the `admin_users`
   table (via the `is_admin()` Postgres function), or signs them out.
3. **Row Level Security in Postgres** (`supabase/schema.sql`) — the real
   backstop. Even if the app code above had a bug, `insert`/`update`/`delete`
   on `posts` is rejected by the database itself unless `is_admin()` is
   true for the calling session. The anon key shipped to the browser has
   no special privileges; it's RLS policies that decide everything.

Comments are the mirror image: **anyone** can `insert`, nobody but the
admin can `delete`/`update`, enforced the same way at the database level.

## 1. Create the Supabase project

1. Go to [supabase.com](https://supabase.com) → New project (free tier is fine).
2. Open **SQL Editor** → paste the entire contents of `supabase/schema.sql` → **Run**.
   This creates the `posts`, `comments`, `admin_users`, `site_stats` tables,
   the `is_admin()` / `increment_visits()` functions, and all RLS policies.

## 2. Create your admin login

1. **Authentication → Providers** → turn **off** "Allow new users to sign up".
   This is the one manual step that guarantees nobody else can register.
2. **Authentication → Users → Add user** → enter your email + a strong
   password → create it directly (skip the confirmation email flow).
3. Copy that user's UUID from the users table.
4. Back in **SQL Editor**, run:
   ```sql
   insert into public.admin_users (id) values ('paste-the-uuid-here');
   ```
   Until this row exists, that login can authenticate but `is_admin()`
   returns false and every admin route/RLS write still rejects it.

## 3. Configure environment variables

```bash
cp .env.local.example .env.local
```

Fill in `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` from
**Project Settings → API** in the Supabase dashboard. Only the anon/public
key is ever used — never put the `service_role` key in this app.

## 4. Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`. Click the small ✦ in the top-right nav —
it goes to `/admin`, which redirects to `/admin/login` until you sign in
with the account you created in step 2.

## 5. Deploy

Push to a Git repo, import it into [Vercel](https://vercel.com/new), and
add the same two `NEXT_PUBLIC_SUPABASE_*` environment variables in the
Vercel project settings. No other config is required — Supabase is
reachable from anywhere, so posts published from your admin panel are
immediately visible to any visitor, on any device.

## Project structure

```
app/
  page.tsx                      Home feed (featured + grid + sidebar)
  kategori/[category]/page.tsx  Category listing (Berita, Motorsport, ...)
  post/[slug]/page.tsx          Article + comments
  admin/login/page.tsx          Public login screen (outside the auth gate)
  admin/(protected)/layout.tsx  Auth check for everything else under /admin
  admin/(protected)/page.tsx    Editor + publish/manage list
  actions/                      Server Actions: auth, posts, comments
  api/visit/route.ts            Visitor-counter increment endpoint
components/                     UI building blocks
lib/
  supabase/                     Browser client, server client, middleware
  data.ts                       Read-only queries used by Server Components
  types.ts, utils.ts
supabase/schema.sql             Full DB schema + RLS policies (run this first)
```

## Notes / things to know

- Post images are plain `<img>` tags pointing at whatever URL you paste in
  the editor (no upload storage yet) — keep that in mind if you want
  Supabase Storage for hosted images later.
- The visitor counter increments once per browser session
  (`sessionStorage`), same behavior as the original localStorage version,
  but the count itself now lives in Postgres so it's shared across every
  visitor and device.
- `admin_users` has no public read/write policy at all — the only way to
  add or remove an admin is via the Supabase SQL editor or dashboard,
  never through the app's API surface.
