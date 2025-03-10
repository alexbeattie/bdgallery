/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Mid-century color palette
        'mcm': {
          'amber': {
            50: '#FFFBEB',
            100: '#FEF3C7',
            200: '#FDE68A',
            300: '#FCD34D',
            400: '#FBBF24',
            500: '#F59E0B',
            600: '#D97706',
            700: '#B45309',
            800: '#92400E',
            900: '#78350F',
          },
          'coral': {
            50: '#FFF1F0',
            100: '#FFE4E2',
            200: '#FECDCA',
            300: '#FCA5A1',
            400: '#FA8070',
            500: '#FF6B6B',  // Primary coral
            600: '#E65A5A',
            700: '#BF4B4B',
            800: '#9A3D3D',
            900: '#7A3232',
          },
          'peach': {
            500: '#FF9E7D',  // Primary peach
          },
          'butter': {
            500: '#FFD670',  // Primary butter
          },
          'gray': {
            900: '#111827',  // Dark borders
          }
        }
      },
      spacing: {
        "custom-left": "calc(25% + 16.6666%)" // 1/4 + 1/6
      },
      fontFamily: {
        'sans': ['mr-eaves-xl-modern-narrow', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'base': '1rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
        '6xl': '4rem',},
      textColor: {
        'mcm-title': '#111827', // Dark text for headings
        'mcm-body': '#4B5563',  // Slightly lighter for body
      },
      backgroundColor: {
        'mcm-bg': '#FFFBEB',    // Light amber background
      },
      boxShadow: {
        'mcm': '8px 8px 0px 0px rgba(0,0,0,0.8)',
      },
      borderRadius: {
        'mcm': '0.5rem',
      },
    },
  },
  plugins: [],
}