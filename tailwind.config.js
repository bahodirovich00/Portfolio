/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1fe',
          100: '#cce4fd',
          200: '#99c9fb',
          300: '#66aef9',
          400: '#3393f7',
          500: '#0078f5',
          600: '#0060c4',
          700: '#004893',
          800: '#003062',
          900: '#001831',
          950: '#0a192f',
        },
        accent: {
          50: '#edfefa',
          100: '#dafdf6',
          200: '#b5fbee',
          300: '#90f9e5',
          400: '#6bf7dd',
          500: '#46f5d4',
          600: '#38c4aa',
          700: '#2a937f',
          800: '#1c6255',
          900: '#0e312a',
          950: '#64ffda',
        },
        background: {
          light: '#f8fafc',
          dark: '#0f172a',
        },
      },
      fontFamily: {
        sans: [
          'Inter var',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 15s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};