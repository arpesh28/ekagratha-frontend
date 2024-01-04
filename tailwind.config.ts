import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        cardContainer: {
          DEFAULT: "hsl(var(--card-container))",
          foreground: "hsl(var(--card-container-foreground))",
        },
        cardSelection: {
          DEFAULT: "hsl(var(--card-selection))",
          foreground: "hsl(var(--card-selection-foreground))",
        },
        sideNav: {
          DEFAULT: "hsl(var(--sideNav))",
          foreground: "hsl(var(--card-selection-foreground))",
        },
        specialBackground: {
          DEFAULT: "hsl(var(--special-background))",
          foreground: "hsl(var(--card-selection-foreground))",
        },
        redText: {
          DEFAULT: "hsl(var(--red-text))",
        },
        yellowText: {
          DEFAULT: "hsl(var(--yellow-text))",
        },
        greenText: {
          DEFAULT: "hsl(var(--green-text))",
        },

        // textLight: "#fcfcfd",
        // textDark: "#0f172a",
        // // primary: "#8419e6",
        // darkMain: "#0e0f12", //#0e0f12,0e0e18
        // darkPrimary: "#131418", //#18181a,#131319,141425
        // darkSecondary: "#17181d", //#212124, #1b1b24,1c1c31
        // darkOption: "#17181d",
        // darkBorder: "#292d39",
        // lightMain: "#cbd3dd", //#cbd3dd,F6F6F6
        // lightPrimary: "#282836",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
