import { Article } from "@/lib/articles";
import ArticleCard from "@/components/article/ArticleCard";
import Sidebar from "@/components/layout/Sidebar";

export default function CategoryPage({
  category,
  description,
  articles,
}: {
  category: string;
  description: string;
  articles: Article[];
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="pb-6 mb-8 border-b border-[#2a2a2e]">
        <h1
          className="text-[#e8e8ec] text-4xl font-bold"
          style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.03em" }}
        >
          {category}
        </h1>
        <p className="text-[#8c8c96] text-sm mt-2 max-w-xl leading-relaxed">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
        {/* Articles */}
        <div>
          {articles.length === 0 ? (
            <p className="text-[#5a5a64] text-sm">No articles yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <Sidebar />
      </div>
    </div>
  );
}
