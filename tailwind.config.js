/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'button-primary': 'var(--button-primary)',
        'button-hover': 'var(--button-hover)',
        'menu-hover': 'var(--menu-hover)',
        'b-secondary': 'var(--b-secondary)',
        'font-primary': 'var(--font-primary)',
        'font-secondary': 'var(--font-secondary)',
        'font-tertiary': 'var(--font-tertiary)',
        'font-emphasis': 'var(--font-emphasis)',
        'font-hover': 'var(--font-hover)',
        'font-logo': 'var(--font-logo)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
} 