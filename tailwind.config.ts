import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px',
        '3xl': '1750px',
      },
      maxWidth: {
        '8xl': '1440px',
      },
      fontSize: {
        '3xl': ['2rem', { lineHeight: '2.35rem' }],
        '6xl': [
          '3.5rem',
          {
            lineHeight: '1.1',
          },
        ],
        '7xl': ['4rem', { lineHeight: '4.5rem' }],
        '8xl': ['4.5rem', { lineHeight: '5rem' }],
      },
      colors: {
        background: 'rgba(var(--background-rgb), <alpha-value>)',
        text: 'rgba(var(--text-color-rgb), <alpha-value>)',
        primary: {
          default: 'rgba(var(--primary-color-rgb), <alpha-value>)',
          dark: 'rgba(var(--primary-dark-color-rgb), <alpha-value>)',
        },
        green: 'rgba(var(--green-color-rgb), <alpha-value>)',
        yellow: 'rgba(var(--yellow-color-rgb), <alpha-value>)',
        buttonWhite: 'rgba(var(--button-white-rgb), <alpha-value>)',
        // secondary: {
        //   DEFAULT: 'hsl(var(--secondary))',
        //   foreground: 'hsl(var(--secondary-foreground))',
        // },
        // muted: {
        //   DEFAULT: 'hsl(var(--muted))',
        //   foreground: 'hsl(var(--muted-foreground))',
        // },
        // accent: {
        //   DEFAULT: 'hsl(var(--accent))',
        //   foreground: 'hsl(var(--accent-foreground))',
        // },
        // destructive: {
        //   DEFAULT: 'hsl(var(--destructive))',
        //   foreground: 'hsl(var(--destructive-foreground))',
        // },
      },
      padding: {
        side: 'var(--padding-side)',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
