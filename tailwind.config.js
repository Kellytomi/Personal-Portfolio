/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F3B2E', // Forest ink for text + anchors
        secondary: '#F6D447', // Sunny yellow accent
        accent: '#F07A63', // Warm coral accent
        surface: '#F8F4E8', // Paper off-white background
        text: '#1C1A16', // Charcoal text
        muted: '#5E5A52', // Warm gray for secondary text
        highlight: '#FFFFFF', // White for highlights
        teal: '#4AA3A2', // Soft teal accent
        plum: '#59426D', // Retro plum accent
      },
      fontFamily: {
        sans: [
          'var(--font-jakarta)',
          'Plus Jakarta Sans',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        display: [
          'var(--font-syne)',
          'Syne',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Georgia',
          'serif',
        ],
      },
      fontSize: {
        '7xl': ['5rem', { lineHeight: '1.1' }],
        '8xl': ['6.5rem', { lineHeight: '1' }],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        float: 'float 6s ease-in-out infinite',
        aurora: 'aurora 60s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        aurora: {
          from: {
            backgroundPosition: '50% 50%, 50% 50%',
          },
          to: {
            backgroundPosition: '350% 50%, 350% 50%',
          },
        },
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0, 0, 0, 0.05)',
        hover: '0 8px 30px rgba(0, 0, 0, 0.1)',
        card: '0px 4px 25px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'grid-pattern': "url('/grid-pattern.svg')",
      },
    },
  },
  plugins: [],
};
