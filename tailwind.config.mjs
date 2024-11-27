/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: 'rgb(253 244 191)', // Matches `text-amber-50`
            a: {
              color: 'rgb(253 244 191)', // Ensure links match
              '&:hover': {
                color: 'rgb(252 211 77)', // Lighter amber on hover
              },
            },
            strong: {
              color: 'rgb(253 244 191)', // Bold text matches
            },
            blockquote: {
              color: 'rgb(253 244 191)',
              borderLeftColor: 'rgb(252 211 77)', // Optional customization for blockquotes
            },
          },
        },
      },
    },
  },plugins: [typography],
}
