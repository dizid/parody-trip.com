/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        trap: {
          blue: {
            50: '#e6f4ff',
            100: '#bae3ff',
            200: '#7cc9ff',
            300: '#36adff',
            400: '#0091ff',
            500: '#006bd6',
            600: '#0052a8',
            700: '#003d7a',
            800: '#00284d',
            900: '#001324',
          },
          pink: {
            50: '#fff0f6',
            100: '#ffd6e7',
            200: '#ffadd2',
            300: '#ff85c0',
            400: '#f759ab',
            500: '#eb2f96',
            600: '#c41d7f',
            700: '#9e1068',
            800: '#780650',
            900: '#520339',
          },
          danger: '#ff4d4f',
          warning: '#faad14',
          success: '#52c41a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'ticker': 'ticker 30s linear infinite',
      },
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        ticker: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
