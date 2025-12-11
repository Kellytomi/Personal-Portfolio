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
        scrapbook: {
          cream: '#FDF6E9',
          'cream-dark': '#F5E6D3',
          kraft: '#C4A77D',
          'kraft-dark': '#A68B5B',
          paper: '#FFFEF9',
          'aged-white': '#FAF8F5',
          coral: '#FF6B6B',
          mustard: '#F4A261',
          sage: '#8FB996',
          'dusty-rose': '#D4A5A5',
          lavender: '#B8A9C9',
          sky: '#87CEEB',
          peach: '#FFCBA4',
          mint: '#98D8C8',
        },
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
        handwriting: ['var(--font-caveat)', 'Caveat', 'cursive'],
        sketch: ['var(--font-patrick)', 'Patrick Hand', 'cursive'],
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
        wiggle: 'wiggle 0.5s ease-in-out',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
        'tape-flutter': 'tapeFlutter 3s ease-in-out infinite',
        'sticker-pop': 'stickerPop 0.3s ease-out',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
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
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0) rotate(var(--rotation, 0deg))' },
          '50%': { transform: 'translateY(-5px) rotate(var(--rotation, 0deg))' },
        },
        tapeFlutter: {
          '0%, 100%': { transform: 'rotate(var(--rotation, -5deg)) scaleY(1)' },
          '50%': { transform: 'rotate(calc(var(--rotation, -5deg) + 1deg)) scaleY(0.98)' },
        },
        stickerPop: {
          '0%': { transform: 'scale(0.8) rotate(var(--rotation, 0deg))', opacity: '0' },
          '50%': { transform: 'scale(1.1) rotate(var(--rotation, 0deg))' },
          '100%': { transform: 'scale(1) rotate(var(--rotation, 0deg))', opacity: '1' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) rotate(var(--rotation, 0deg))' },
          '50%': { transform: 'translateY(-8px) rotate(calc(var(--rotation, 0deg) + 1deg))' },
        },
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0, 0, 0, 0.05)',
        hover: '0 8px 30px rgba(0, 0, 0, 0.1)',
        card: '0px 4px 25px rgba(0, 0, 0, 0.08)',
        polaroid: '0 4px 15px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)',
        'polaroid-hover': '0 8px 25px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1)',
        sticker: '2px 2px 8px rgba(0, 0, 0, 0.1)',
        tape: '0 1px 3px rgba(0, 0, 0, 0.1)',
        'paper-lift': '0 10px 30px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: {
        'grid-pattern': "url('/grid-pattern.svg')",
        'paper-texture': "url('/scrapbook/paper-texture.svg')",
        'kraft-texture': "url('/scrapbook/kraft-texture.svg')",
        'notebook-lines': "url('/scrapbook/notebook-lines.svg')",
      },
      rotate: {
        'slight-left': '-3deg',
        'slight-right': '3deg',
        'tilt-left': '-6deg',
        'tilt-right': '6deg',
      },
    },
  },
  plugins: [],
};
