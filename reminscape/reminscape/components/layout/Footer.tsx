import Link from "next/link";

const footerLinks = [
  { href: "/news", label: "News" },
  { href: "/motorsport", label: "Motorsport" },
  { href: "/technology", label: "Technology" },
  { href: "/gaming", label: "Gaming" },
  { href: "/opinion", label: "Opinion" },
  { href: "/about", label: "About" },
  { href: "/search", label: "Search" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a2e] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <Link
              href="/"
              className="text-[#e8e8ec] font-bold text-2xl hover:text-[#b5a48a] transition-colors"
              style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.03em" }}
            >
              reminscape
            </Link>
            <p className="text-[#5a5a64] text-sm mt-2 max-w-xs">
              An independent publication. Writing about the world, one story at a time.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#5a5a64] hover:text-[#8c8c96] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-[#2a2a2e]">
          <p className="text-[#5a5a64] text-xs">
            © 2026 reminscape. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
