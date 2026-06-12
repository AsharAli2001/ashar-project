import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-2": "var(--bg-2)",
        text: "var(--text)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        gold: "#F6A623",
        coral: "#FB7A5B",
        emerald: "#34D9A8",
        rose: "#F4747D",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: { content: "1180px" },
      borderRadius: { xl2: "20px" },
    },
  },
  plugins: [],
};
export default config;
