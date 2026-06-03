/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2C7A6F',
          dark: '#1E5C52',
          light: '#4A9B8E',
        },
        surface: {
          DEFAULT: '#F8FAF9',
          dark: '#e6f2ed',
        },
        ink: {
          DEFAULT: '#1E3A34',
          muted: '#33433f',
          light: '#5a6e6a',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #f0f7f5 0%, #e6f2ed 100%)',
      },
      boxShadow: {
        'card': '0 25px 50px -12px rgba(44, 122, 111, 0.18)',
        'card-hover': '0 32px 60px -10px rgba(44, 122, 111, 0.28)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
