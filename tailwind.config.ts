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
        lg: '1025px',
        '2xl': '1440px',
        '3xl': '1750px',
        '4xl': '2200px',
      },
      maxWidth: {
        '8xl': '1440px',
      },
      fontSize: {
        xxs: ['0.625rem', { lineHeight: '0.75rem' }],
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
          defaultDarker: 'rgba(var(--primary-color-rgb-20), <alpha-value>)',
          dark: 'rgba(var(--primary-dark-color-rgb), <alpha-value>)',
          dark20: 'rgba(var(--primary-dark-color-rgb-20), <alpha-value>)',
        },
        green: {
          default: 'rgba(var(--green-color-rgb), <alpha-value>)',
          darker: 'rgba(var(--green-color-rgb-20), <alpha-value>)',
        },
        yellow: {
          default: 'rgba(var(--yellow-color-rgb), <alpha-value>)',
          darker: 'rgba(var(--yellow-color-rgb-20), <alpha-value>)',
        },
        buttonWhite: {
          default: 'rgba(var(--button-white-rgb), <alpha-value>)',
          darker: 'rgba(var(--button-white-rgb-20), <alpha-value>)',
        },
        footerBackground: 'rgba(var(--footer-background-rgb), <alpha-value>)',
        button: {
          default: 'rgba(var(--button-default-rgb), <alpha-value>)',
          default20: 'rgba(var(--button-default-rgb-20), <alpha-value>)',
          // dark: 'rgba(var(--button-dark-rgb), <alpha-value>)',
          // dark20: 'rgba(var(--button-dark-rgb-20), <alpha-value>)',
        },
        classes: {
          noGi: {
            default: 'rgba(var(--no-gi-color-rgb), <alpha-value>)',
            darker: 'rgba(var(--no-gi-color-rgb-20), <alpha-value>)',
          },
          gi: {
            default: 'rgba(var(--gi-color-rgb), <alpha-value>)',
            darker: 'rgba(var(--gi-color-rgb-20), <alpha-value>)',
          },
          kids: {
            default: 'rgba(var(--kids-color-rgb), <alpha-value>)',
            darker: 'rgba(var(--kids-color-rgb-20), <alpha-value>)',
          },
          mma: {
            default: 'rgba(var(--mma-color-rgb), <alpha-value>)',
            darker: 'rgba(var(--mma-color-rgb-20), <alpha-value>)',
          },
          wrestling: {
            default: 'rgba(var(--wrestling-color-rgb), <alpha-value>)',
            darker: 'rgba(var(--wrestling-color-rgb-20), <alpha-value>)',
          },
          striking: {
            default: 'rgba(var(--striking-color-rgb), <alpha-value>)',
            darker: 'rgba(var(--striking-color-rgb-20), <alpha-value>)',
          },
          darkblue: 'rgba(var(--schedule-darkblue-color-rgb), <alpha-value>)',
          bg: 'rgba(var(--schedule-bg-color-rgb), <alpha-value>)',
        },
      },
      boxShadow: {
        schedule: '0px 0px 20px 24px rgba(0, 0, 0, 0.05)',
        classCard: '0px 4px 10px 0px rgba(0, 0, 0, 0.25)',
      },
      padding: {
        side: 'var(--padding-side)',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      animation: {
        slide: 'slide 20s linear infinite',
        reveal: 'reveal 1s forwards cubic-bezier(0.77, 0, 0.175, 1)',
        float: 'float 10s ease-in-out infinite',
      },
      keyframes: {
        reveal: {
          to: { clipPath: 'inset(0 0 0 0)' },
        },
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(40px, 45px)' },
          '50%': { transform: 'translate(30px, -40px)' },
          '75%': { transform: 'translate(-40px, 35px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
