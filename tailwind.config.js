module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(200, 50%, 3%)",
        foreground: "hsl(0, 0%, 98%)",
        primary: {
          DEFAULT: "hsl(180, 100%, 50%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        card: {
          DEFAULT: "hsl(200, 45%, 8%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        muted: {
          DEFAULT: "hsl(200, 30%, 20%)",
          foreground: "hsl(0, 0%, 70%)",
        },
        accent: {
          DEFAULT: "hsl(180, 100%, 50%)",
          foreground: "hsl(0, 0%, 98%)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle at center, rgba(45, 212, 191, 0.1) 0%, transparent 70%)",
        "gradient-card": "linear-gradient(180deg, hsl(200, 45%, 8%) 0%, hsl(200, 50%, 3%) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

