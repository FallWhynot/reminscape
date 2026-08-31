import Link from "next/link";
import Image from "next/image";
import { Article } from "@/lib/articles";
import { formatDate } from "@/lib/utils";
import CategoryBadge from "@/components/ui/CategoryBadge";

export default function FeaturedArticle({ article }: { article: Article }) {
  const href = `/${article.category.toLowerCase()}/${article.slug}`;

  return (
    <article className="group relative">
      <Link href={href} className="block">
        <div className="relative aspect-[21/9] sm:aspect-[16/7] rounded overflow-hidden bg-[#1c1c1f]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="100vw"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 md:p-10">
            <CategoryBadge category={article.category} linked={false} />
            <h2 className="text-[#e8e8ec] text-2xl sm:text-3xl md:text-4xl font-bold mt-3 leading-tight max-w-2xl group-hover:text-[#b5a48a] transition-colors"
              style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.02em" }}>
              {article.title}
            </h2>
            <p className="text-[#c4c4cc] text-sm sm:text-base mt-2 max-w-xl line-clamp-2 leading-relaxed">
              {article.excerpt}
            </p>
            <p className="text-[#8c8c96] text-xs mt-3">
              {formatDate(article.date)} · {article.readingTime} min read
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
