import { Metadata } from "next";
import { getArticlesByCategory, categoryDescriptions } from "@/lib/articles";
import CategoryPage from "@/components/layout/CategoryPage";

export const metadata: Metadata = {
  title: "Gaming",
  description: categoryDescriptions["Gaming"],
};

export default function Page() {
  const articles = getArticlesByCategory("Gaming");
  return (
    <CategoryPage
      category="Gaming"
      description={categoryDescriptions["Gaming"]}
      articles={articles}
    />
  );
}
