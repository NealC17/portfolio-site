/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FAFAF9",
        surface: "#F6F4EF",
        ink: "#16181A",
        "ink-soft": "#3A3D40",
        "ink-muted": "#5B6066",
        "ink-faint": "#9A9488",
        line: "#E4E0D6",
        accent: "#2454C7",
        copper: "#BA7517",
        research: "#0F6E56",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      maxWidth: {
        content: "760px",
      },
    },
  },
  plugins: [],
};
