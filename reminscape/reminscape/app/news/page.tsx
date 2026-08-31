import { Metadata } from "next";
import { getArticlesByCategory, categoryDescriptions } from "@/lib/articles";
import CategoryPage from "@/components/layout/CategoryPage";

export const metadata: Metadata = {
  title: "News",
  description: categoryDescriptions["News"],
};

export default function Page() {
  const articles = getArticlesByCategory("News");
  return (
    <CategoryPage
      category="News"
      description={categoryDescriptions["News"]}
      articles={articles}
    />
  );
}
