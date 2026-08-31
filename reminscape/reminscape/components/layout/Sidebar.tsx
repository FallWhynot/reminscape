import Link from "next/link";
import { getRecentArticles, categories } from "@/lib/articles";
import ArticleCard from "@/components/article/ArticleCard";
import { formatDate } from "@/lib/utils";

export default function Sidebar() {
  const recent = getRecentArticles(4);

  return (
    <aside className="space-y-8">
      {/* About */}
      <div className="border border-[#2a2a2e] rounded p-5">
        <h3 className="text-xs uppercase tracking-widest text-[#5a5a64] mb-3">About</h3>
        <p className="text-[#8c8c96] text-sm leading-relaxed">
          reminscape is an independent publication covering news, motorsport, technology, gaming, and culture.
        </p>
        <Link href="/about" className="text-[#b5a48a] text-xs mt-3 inline-block hover:text-[#c9b89e] transition-colors">
          Read more →
        </Link>
      </div>

      {/* Search */}
      <div className="border border-[#2a2a2e] rounded p-5">
        <h3 className="text-xs uppercase tracking-widest text-[#5a5a64] mb-3">Search</h3>
        <Link
          href="/search"
          className="flex items-center gap-2 bg-[#1c1c1f] text-[#8c8c96] text-sm px-3 py-2 rounded hover:bg-[#2a2a2e] transition-colors w-full text-left"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          Search articles…
        </Link>
      </div>

      {/* Categories */}
      <div className="border border-[#2a2a2e] rounded p-5">
        <h3 className="text-xs uppercase tracking-widest text-[#5a5a64] mb-3">Categories</h3>
        <ul className="space-y-1">
          {categories.map((cat) => (
            <li key={cat}>
              <Link
                href={`/${cat.toLowerCase()}`}
                className="text-sm text-[#8c8c96] hover:text-[#e8e8ec] transition-colors flex items-center justify-between py-1"
              >
                <span>{cat}</span>
                <span className="text-[#3a3a3e]">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent posts */}
      <div className="border border-[#2a2a2e] rounded p-5">
        <h3 className="text-xs uppercase tracking-widest text-[#5a5a64] mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {recent.map((article) => (
            <ArticleCard key={article.slug} article={article} layout="horizontal" />
          ))}
        </div>
      </div>
    </aside>
  );
}
