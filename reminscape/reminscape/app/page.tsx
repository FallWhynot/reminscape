import { Metadata } from "next";
import {
  articles,
  getFeaturedArticles,
  getRecentArticles,
  getArticlesByCategory,
  categories,
  categoryDescriptions,
} from "@/lib/articles";
import FeaturedArticle from "@/components/article/FeaturedArticle";
import ArticleCard from "@/components/article/ArticleCard";
import NewsletterSignup from "@/components/ui/NewsletterSignup";
import VisitorCounter from "@/components/ui/VisitorCounter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "reminscape — Independent Publication",
  description:
    "An independent publication covering news, motorsport, technology, gaming, and culture.",
};

export default function HomePage() {
  const featured = getFeaturedArticles();
  const latest = getRecentArticles(6);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Hero */}
      <section className="pt-10 pb-12">
        {featured[0] && <FeaturedArticle article={featured[0]} />}
      </section>

      {/* Latest stories */}
      <section className="pb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[#e8e8ec] text-lg font-semibold">Latest</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* Featured secondary */}
      {featured.length > 1 && (
        <section className="pb-12">
          <h2 className="text-[#e8e8ec] text-lg font-semibold mb-6">Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.slice(1, 3).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* Category highlights */}
      <section className="pb-12">
        <h2 className="text-[#e8e8ec] text-lg font-semibold mb-8">By category</h2>
        <div className="space-y-10">
          {categories.map((cat) => {
            const catArticles = getArticlesByCategory(cat).slice(0, 2);
            if (!catArticles.length) return null;
            return (
              <div key={cat}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#b5a48a] text-sm font-semibold uppercase tracking-widest">
                    {cat}
                  </h3>
                  <Link
                    href={`/${cat.toLowerCase()}`}
                    className="text-xs text-[#5a5a64] hover:text-[#b5a48a] transition-colors"
                  >
                    More {cat.toLowerCase()} →
                  </Link>
                </div>
                <p className="text-[#5a5a64] text-xs mb-4 max-w-md">
                  {categoryDescriptions[cat]}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {catArticles.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                </div>
                <div className="h-px bg-[#2a2a2e] mt-8" />
              </div>
            );
          })}
        </div>
      </section>

      {/* Popular + Visitor counter */}
      <section className="pb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h2 className="text-[#e8e8ec] text-lg font-semibold mb-6">Popular</h2>
          <div className="space-y-5">
            {articles.slice(0, 4).map((article, i) => (
              <div key={article.slug} className="flex gap-4 items-start group">
                <span
                  className="text-3xl font-bold text-[#2a2a2e] leading-none mt-1 select-none"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <ArticleCard article={article} layout="horizontal" />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <VisitorCounter />
        </div>
      </section>

      {/* Newsletter */}
      <section className="pb-16">
        <NewsletterSignup />
      </section>
    </div>
  );
}
