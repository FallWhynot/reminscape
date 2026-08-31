import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#121214",
        "bg-raised": "#17171a",
        card: "#1d1d21",
        "card-hover": "#232328",
        border: "#2a2a2f",
        "border-soft": "#232327",
        text: "#f2f0ec",
        "text-secondary": "#a3a3aa",
        "text-tertiary": "#6c6c74",
        accent: "#c9a24b",
        "accent-bright": "#dab766",
        green: "#4ade80",
        danger: "#e5626a",
        "c-berita": "#6ea8fe",
        "c-motorsport": "#f97a5c",
        "c-gayahidup": "#c9a24b",
        "c-sastra": "#b39ffb",
        "c-jurnalistik": "#2dd4bf"
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "-apple-system", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
