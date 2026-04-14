import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#29A8D5',
          50: '#F0F9FD',
          100: '#DCF0F9',
          200: '#B3E0F3',
          300: '#7ECCE9',
          400: '#3FB5DB',
          500: '#29A8D5',
          600: '#1E8FB5',
          700: '#1A7693',
          800: '#1A5F78',
          900: '#1B4F64',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          150: '#ECEEF1',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#0A0F1A',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
