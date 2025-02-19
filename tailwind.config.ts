import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        didot: ["Didot", "sans-serif"],
        noto: "var(--font-noto-sans)", // `Noto Sans` を適用
        playfair: "var(--font-playfair-display)", // `Playfair Display` を適用
      },
    },
  },
  plugins: [],
} satisfies Config;
