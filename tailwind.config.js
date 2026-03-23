/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
        colors: {
            background: '#000000',
            surface: '#111111',
            border: '#222222',
            primary: '#2F80ED',
            accent: '#9B51E0',
        },
        fontFamily: {
            sans: ['"SF Pro Display"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
            text: ['Inter', 'sans-serif'],
        },
        animation: {
            'fade-in': 'fadeIn 0.8s ease-out forwards',
            'slide-up': 'slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            'float': 'float 6s ease-in-out infinite',
            'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        keyframes: {
            fadeIn: {
                '0%': { opacity: '0' },
                '100%': { opacity: '1' },
            },
            slideUp: {
                '0%': { opacity: '0', transform: 'translateY(40px) scale(0.98)' },
                '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
            },
            float: {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-15px)' },
            }
        }
    }
  },
  plugins: [],
}
