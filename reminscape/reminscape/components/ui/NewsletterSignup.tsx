"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-[#1c1c1f] border border-[#2a2a2e] rounded p-8 md:p-10">
      <div className="max-w-xl">
        <h2
          className="text-[#e8e8ec] text-2xl font-bold"
          style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.02em" }}
        >
          Stay informed
        </h2>
        <p className="text-[#8c8c96] text-sm mt-2 leading-relaxed">
          Get new articles delivered to your inbox. No noise, no spam — just the writing.
        </p>

        {submitted ? (
          <div className="mt-5 text-emerald-400 text-sm">
            You are on the list. Thanks for reading.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 flex gap-2 max-w-sm">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-[#141416] border border-[#2a2a2e] rounded px-3 py-2 text-sm text-[#e8e8ec] placeholder-[#5a5a64] focus:border-[#b5a48a] focus:outline-none transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-[#b5a48a] hover:bg-[#c9b89e] text-[#0c0c0d] text-sm font-medium px-4 py-2 rounded transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
