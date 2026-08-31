import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getArticleBySlug, getArticlesByCategory, articles } from "@/lib/articles";
import ArticlePage from "@/components/article/ArticlePage";

export async function generateStaticParams() {
  return getArticlesByCategory("Opinion").map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt, openGraph: { title: article.title, description: article.excerpt, images: [article.image] } };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article || article.category !== "Opinion") notFound();
  const related = getArticlesByCategory("Opinion").filter((a) => a.slug !== slug).slice(0, 3);
  const idx = articles.findIndex((a) => a.slug === slug);
  const prev = idx > 0 ? articles[idx - 1] : undefined;
  const next = idx < articles.length - 1 ? articles[idx + 1] : undefined;
  return <ArticlePage article={article} related={related} prev={prev} next={next} />;
}
