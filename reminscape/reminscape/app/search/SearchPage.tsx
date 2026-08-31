"use client";

import { useState } from "react";
import { searchArticles } from "@/lib/articles";
import ArticleCard from "@/components/article/ArticleCard";
import { Search } from "lucide-react";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const results = query.trim().length > 1 ? searchArticles(query.trim()) : [];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <h1
        className="text-[#e8e8ec] text-4xl font-bold mb-8"
        style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.03em" }}
      >
        Search
      </h1>

      {/* Search input */}
      <div className="relative mb-10">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5a5a64]"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles, categories, topics…"
          className="w-full bg-[#1c1c1f] border border-[#2a2a2e] rounded pl-10 pr-4 py-3 text-[#e8e8ec] placeholder-[#5a5a64] focus:border-[#b5a48a] focus:outline-none transition-colors text-sm"
          autoFocus
        />
      </div>

      {/* Results */}
      {query.trim().length > 1 && (
        <>
          <p className="text-xs text-[#5a5a64] mb-6">
            {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
          </p>

          {results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-[#5a5a64] text-lg mb-2">No results found</p>
              <p className="text-[#3a3a3e] text-sm">
                Try a different search term or browse a category.
              </p>
            </div>
          )}
        </>
      )}

      {query.trim().length <= 1 && (
        <div className="text-center py-16">
          <p className="text-[#5a5a64] text-sm">Start typing to search articles.</p>
        </div>
      )}
    </div>
  );
}
