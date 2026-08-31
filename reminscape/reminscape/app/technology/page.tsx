import { Metadata } from "next";
import { getArticlesByCategory, categoryDescriptions } from "@/lib/articles";
import CategoryPage from "@/components/layout/CategoryPage";

export const metadata: Metadata = {
  title: "Technology",
  description: categoryDescriptions["Technology"],
};

export default function Page() {
  const articles = getArticlesByCategory("Technology");
  return (
    <CategoryPage
      category="Technology"
      description={categoryDescriptions["Technology"]}
      articles={articles}
    />
  );
}
