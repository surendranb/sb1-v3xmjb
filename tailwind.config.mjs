/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2C3E50',
          light: '#34495E',
          dark: '#1a252f',
        },
        accent: {
          DEFAULT: '#E67E22',
          light: '#F39C12',
          dark: '#d35400',
        }
      },
      fontFamily: {
        serif: ['Spectral', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        handwritten: ['Caveat', 'cursive'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.gray.700'),
            '--tw-prose-headings': theme('colors.gray.900'),
            '--tw-prose-links': theme('colors.primary.DEFAULT'),
            '--tw-prose-bold': theme('colors.gray.900'),
            '--tw-prose-quotes': theme('colors.gray.900'),
            '--tw-prose-quote-borders': theme('colors.accent.DEFAULT'),
            maxWidth: 'none',
          },
        },
        dark: {
          css: {
            '--tw-prose-body': theme('colors.gray.300'),
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-links': theme('colors.primary.light'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-quotes': theme('colors.gray.100'),
            '--tw-prose-quote-borders': theme('colors.accent.light'),
          },
        },
      }),
      lineClamp: {
        1: '1',
        2: '2',
        3: '3',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};