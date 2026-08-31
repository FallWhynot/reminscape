import { Metadata } from "next";
import { getArticlesByCategory, categoryDescriptions } from "@/lib/articles";
import CategoryPage from "@/components/layout/CategoryPage";

export const metadata: Metadata = {
  title: "Motorsport",
  description: categoryDescriptions["Motorsport"],
};

export default function Page() {
  const articles = getArticlesByCategory("Motorsport");
  return (
    <CategoryPage
      category="Motorsport"
      description={categoryDescriptions["Motorsport"]}
      articles={articles}
    />
  );
}
