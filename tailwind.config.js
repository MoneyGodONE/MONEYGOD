/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
        border: "var(--color-border)", /* gold with opacity */
        input: "var(--color-input)", /* gold with opacity */
        ring: "var(--color-ring)", /* gold */
        background: "var(--color-background)", /* Clean cosmic canvas */
        foreground: "var(--color-foreground)", /* white */
        primary: {
          DEFAULT: "var(--color-primary)", /* Deep space foundation */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* Orbital ring depth */
          foreground: "var(--color-secondary-foreground)", /* white */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* red */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* Orbital ring depth */
          foreground: "var(--color-muted-foreground)", /* Supporting data */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* gold */
          foreground: "var(--color-accent-foreground)", /* Deep space foundation */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* Card elevation */
          foreground: "var(--color-popover-foreground)", /* white */
        },
        card: {
          DEFAULT: "var(--color-card)", /* Card elevation */
          foreground: "var(--color-card-foreground)", /* white */
        },
        success: {
          DEFAULT: "var(--color-success)", /* teal */
          foreground: "var(--color-success-foreground)", /* Deep space foundation */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* orange */
          foreground: "var(--color-warning-foreground)", /* white */
        },
        error: {
          DEFAULT: "var(--color-error)", /* red */
          foreground: "var(--color-error-foreground)", /* white */
        },
        "text-primary": "var(--color-text-primary)", /* white */
        "text-secondary": "var(--color-text-secondary)", /* gray-blue */
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        'source-sans': ['Source Sans Pro', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        'space-mono': ['Space Mono', 'monospace'],
      },
      boxShadow: {
        'cta': '0 8px 32px rgba(255, 215, 0, 0.15)',
        'card': '0 4px 16px rgba(45, 53, 97, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 250ms ease-out',
        'slide-in': 'slideIn 300ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}