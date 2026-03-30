/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
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
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
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
        // Brand colors
        navy: {
          DEFAULT: '#0B1A3E',
          deep: '#0A0E1A',
          dark: '#070B14',
          light: '#122255',
        },
        red: {
          DEFAULT: '#E11D2E',
          dark: '#B81724',
          light: '#F0444F',
        },
        brass: {
          DEFAULT: '#C8A96E',
          dark: '#A88B52',
          light: '#E8D4A8',
        },
        cream: '#F4F7FF',
        gray: {
          cool: '#A7B1C8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
        '2xl': '1rem',
        '3xl': '1.25rem',
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'glow-brass': '0 0 20px rgba(200, 169, 110, 0.4), 0 0 40px rgba(200, 169, 110, 0.2)',
        'glow-red': '0 8px 30px rgba(225, 29, 46, 0.4)',
        'card': '0 18px 50px rgba(0, 0, 0, 0.35)',
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "pulse-brass": {
          "0%, 100%": { boxShadow: "0 0 12px rgba(200, 169, 110, 0.3), 0 0 24px rgba(200, 169, 110, 0.15)" },
          "50%": { boxShadow: "0 0 20px rgba(200, 169, 110, 0.5), 0 0 40px rgba(200, 169, 110, 0.25)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "float": "float 3s ease-in-out infinite",
        "pulse-brass": "pulse-brass 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
