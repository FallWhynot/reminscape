"use client";

import { useEffect, useState } from "react";

// Designed for future Supabase integration
// Replace MOCK_TOTAL with an API fetch
const MOCK_TOTAL = 14_832;

export default function VisitorCounter() {
  const [count, setCount] = useState(MOCK_TOTAL);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Animate count up on mount
    setVisible(true);
    let start = MOCK_TOTAL - 120;
    const interval = setInterval(() => {
      start += 8;
      if (start >= MOCK_TOTAL) {
        setCount(MOCK_TOTAL);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`bg-[#1c1c1f] border border-[#2a2a2e] rounded p-5 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <p className="text-xs text-[#5a5a64] uppercase tracking-widest mb-1">Total visits</p>
      <p
        className="text-3xl font-bold text-[#e8e8ec]"
        style={{ fontFamily: "Georgia, serif" }}
      >
        {count.toLocaleString("en-GB")}
      </p>
      <p className="text-xs text-[#5a5a64] mt-1">readers and counting</p>
    </div>
  );
}
