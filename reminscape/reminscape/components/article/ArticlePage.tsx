import Image from "next/image";
import Link from "next/link";
import { Article } from "@/lib/articles";
import { formatDate } from "@/lib/utils";
import CategoryBadge from "@/components/ui/CategoryBadge";
import CommentSection from "@/components/article/CommentSection";
import ArticleCard from "@/components/article/ArticleCard";
import Sidebar from "@/components/layout/Sidebar";

export default function ArticlePage({
  article,
  related,
  prev,
  next,
}: {
  article: Article;
  related: Article[];
  prev?: Article;
  next?: Article;
}) {
  const shareUrl = `/${article.category.toLowerCase()}/${article.slug}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
        {/* Main content */}
        <article>
          {/* Article header */}
          <header className="mb-8">
            <CategoryBadge category={article.category} />
            <h1
              className="text-[#e8e8ec] text-3xl sm:text-4xl font-bold mt-4 leading-tight"
              style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.02em" }}
            >
              {article.title}
            </h1>
            <p className="text-[#8c8c96] text-lg mt-3 leading-relaxed">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-3 mt-5 text-xs text-[#5a5a64]">
              <span>{formatDate(article.date)}</span>
              <span>·</span>
              <span>{article.readingTime} min read</span>
            </div>
          </header>

          {/* Featured image */}
          <div className="relative aspect-[16/9] rounded overflow-hidden mb-8 bg-[#1c1c1f]">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 780px"
            />
          </div>

          {/* Article body */}
          <div className="article-body">
            {article.body.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          {article.tags.length > 0 && (
            <div className="mt-8 pt-6 border-t border-[#2a2a2e]">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-[#1c1c1f] border border-[#2a2a2e] text-[#8c8c96] px-3 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Share */}
          <div className="mt-6 pt-6 border-t border-[#2a2a2e]">
            <p className="text-xs text-[#5a5a64] mb-2">Share</p>
            <div className="flex gap-2">
              <a
                href={`https://twitter.com/intent/tweet?url=https://reminscape.com${shareUrl}&text=${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-[#1c1c1f] border border-[#2a2a2e] text-[#8c8c96] hover:text-[#e8e8ec] px-3 py-1.5 rounded transition-colors"
                aria-label="Share on Twitter"
              >
                Twitter / X
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=https://reminscape.com${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-[#1c1c1f] border border-[#2a2a2e] text-[#8c8c96] hover:text-[#e8e8ec] px-3 py-1.5 rounded transition-colors"
                aria-label="Share on LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Prev / Next */}
          <nav
            className="mt-10 pt-8 border-t border-[#2a2a2e] grid grid-cols-2 gap-4"
            aria-label="Article navigation"
          >
            {prev ? (
              <Link
                href={`/${prev.category.toLowerCase()}/${prev.slug}`}
                className="group"
              >
                <p className="text-xs text-[#5a5a64] mb-1">← Previous</p>
                <p className="text-sm text-[#8c8c96] group-hover:text-[#b5a48a] transition-colors line-clamp-2 leading-snug">
                  {prev.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {next && (
              <Link
                href={`/${next.category.toLowerCase()}/${next.slug}`}
                className="group text-right"
              >
                <p className="text-xs text-[#5a5a64] mb-1">Next →</p>
                <p className="text-sm text-[#8c8c96] group-hover:text-[#b5a48a] transition-colors line-clamp-2 leading-snug">
                  {next.title}
                </p>
              </Link>
            )}
          </nav>

          {/* Related articles */}
          {related.length > 0 && (
            <section className="mt-12 pt-8 border-t border-[#2a2a2e]">
              <h2 className="text-[#e8e8ec] text-lg font-semibold mb-6">
                More from {article.category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {related.map((a) => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
            </section>
          )}

          {/* Comments */}
          <CommentSection />
        </article>

        {/* Sidebar */}
        <Sidebar />
      </div>
    </div>
  );
}
