import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: '#F7F9FC',
        foreground: '#1E1E1E',
        primary: {
          DEFAULT: '#0A66C2',
          foreground: '#FFFFFF',
          hover: '#0056A6'
        },
        secondary: {
          DEFAULT: '#00B2FF',
          foreground: '#FFFFFF'
        },
        accent: {
          DEFAULT: '#00C49A',
          foreground: '#FFFFFF'
        },
        muted: {
          DEFAULT: '#5F6A7D',
          foreground: '#E0E6ED'
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#1E1E1E'
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#1E1E1E'
        },
        destructive: {
          DEFAULT: '#FF4D4F',
          foreground: '#FFFFFF'
        },
        data: {
          blue: {
            light: '#00B2FF',
            DEFAULT: '#0A66C2',
            dark: '#0056A6'
          },
          gray: {
            lightest: '#F7F9FC',
            light: '#E0E6ED',
            DEFAULT: '#5F6A7D',
            dark: '#1E1E1E'
          },
          accent: '#00C49A'
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif']
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      boxShadow: {
        card: '0 2px 4px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1)',
        hover: '0 4px 8px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'slide-in-bottom': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-in-right': 'fade-in-right 0.5s ease-out forwards',
        'slide-in-bottom': 'slide-in-bottom 0.5s ease-out forwards'
      }
    }
  },
  plugins: [animate],
} satisfies Config;
