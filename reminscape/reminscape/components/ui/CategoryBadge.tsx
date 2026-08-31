import Link from "next/link";

const categoryColors: Record<string, string> = {
  news: "bg-blue-900/30 text-blue-300 border-blue-800/40",
  motorsport: "bg-red-900/30 text-red-300 border-red-800/40",
  technology: "bg-emerald-900/30 text-emerald-300 border-emerald-800/40",
  gaming: "bg-purple-900/30 text-purple-300 border-purple-800/40",
  opinion: "bg-amber-900/30 text-amber-300 border-amber-800/40",
};

export default function CategoryBadge({
  category,
  linked = true,
}: {
  category: string;
  linked?: boolean;
}) {
  const key = category.toLowerCase();
  const cls = `inline-block text-xs font-medium px-2 py-0.5 rounded border tracking-wide ${
    categoryColors[key] || "bg-[#2a2a2e] text-[#8c8c96] border-[#3a3a3e]"
  }`;

  if (linked) {
    return (
      <Link href={`/${key}`} className={cls}>
        {category}
      </Link>
    );
  }
  return <span className={cls}>{category}</span>;
}
