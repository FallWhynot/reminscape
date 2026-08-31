"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/motorsport", label: "Motorsport" },
  { href: "/technology", label: "Technology" },
  { href: "/gaming", label: "Gaming" },
  { href: "/opinion", label: "Opinion" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0c0c0d]/95 backdrop-blur-sm border-b border-[#2a2a2e]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link
            href="/"
            className="text-[#e8e8ec] font-bold text-xl tracking-tight hover:text-[#b5a48a] transition-colors"
            style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.03em" }}
          >
            reminscape
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  pathname === link.href
                    ? "text-[#b5a48a]"
                    : "text-[#8c8c96] hover:text-[#e8e8ec]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              href="/search"
              className="text-[#8c8c96] hover:text-[#e8e8ec] transition-colors p-1"
              aria-label="Search"
            >
              <Search size={18} />
            </Link>
            <button
              className="md:hidden text-[#8c8c96] hover:text-[#e8e8ec] transition-colors p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#141416] border-t border-[#2a2a2e]">
          <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2.5 text-sm border-b border-[#2a2a2e] last:border-0 transition-colors ${
                  pathname === link.href
                    ? "text-[#b5a48a]"
                    : "text-[#8c8c96] hover:text-[#e8e8ec]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
