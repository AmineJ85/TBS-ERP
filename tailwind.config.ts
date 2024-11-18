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
        tbsSky: "#C3EBFA",
        tbsSkylIGHT: "#EDF9FD",
        tbsPurple: "#CFCEFF",
        tbsPurpleLight: "#F1F0FF",
        tbsYellow: "#FAE27C",
        tbsYellowLight: "#FEFCE8",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
