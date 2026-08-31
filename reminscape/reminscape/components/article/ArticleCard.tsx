import Link from "next/link";
import Image from "next/image";
import { Article } from "@/lib/articles";
import { formatDate } from "@/lib/utils";
import CategoryBadge from "@/components/ui/CategoryBadge";

export default function ArticleCard({
  article,
  layout = "vertical",
}: {
  article: Article;
  layout?: "vertical" | "horizontal";
}) {
  const href = `/${article.category.toLowerCase()}/${article.slug}`;

  if (layout === "horizontal") {
    return (
      <article className="flex gap-4 group">
        <Link href={href} className="flex-shrink-0">
          <div className="relative w-24 h-20 sm:w-32 sm:h-24 rounded overflow-hidden bg-[#1c1c1f]">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="128px"
            />
          </div>
        </Link>
        <div className="flex-1 min-w-0">
          <CategoryBadge category={article.category} />
          <Link href={href}>
            <h3 className="text-sm font-semibold text-[#e8e8ec] group-hover:text-[#b5a48a] transition-colors mt-1 leading-snug line-clamp-2">
              {article.title}
            </h3>
          </Link>
          <p className="text-xs text-[#5a5a64] mt-1">
            {formatDate(article.date)} · {article.readingTime} min read
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col">
      <Link href={href} className="block overflow-hidden rounded bg-[#1c1c1f] mb-3">
        <div className="relative aspect-[16/9]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </Link>
      <div className="flex flex-col flex-1">
        <CategoryBadge category={article.category} />
        <Link href={href}>
          <h3 className="text-[#e8e8ec] font-semibold text-base leading-snug mt-2 group-hover:text-[#b5a48a] transition-colors line-clamp-2">
            {article.title}
          </h3>
        </Link>
        <p className="text-[#8c8c96] text-sm mt-1.5 line-clamp-2 leading-relaxed flex-1">
          {article.excerpt}
        </p>
        <p className="text-xs text-[#5a5a64] mt-2">
          {formatDate(article.date)} · {article.readingTime} min read
        </p>
      </div>
    </article>
  );
}
