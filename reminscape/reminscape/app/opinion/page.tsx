import { Metadata } from "next";
import { getArticlesByCategory, categoryDescriptions } from "@/lib/articles";
import CategoryPage from "@/components/layout/CategoryPage";

export const metadata: Metadata = {
  title: "Opinion",
  description: categoryDescriptions["Opinion"],
};

export default function Page() {
  const articles = getArticlesByCategory("Opinion");
  return (
    <CategoryPage
      category="Opinion"
      description={categoryDescriptions["Opinion"]}
      articles={articles}
    />
  );
}
