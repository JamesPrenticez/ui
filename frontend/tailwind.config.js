module.exports = {
  mode: 'jit',
  content: [
    './src/.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/routes/**/*.{js,ts,jsx,tsx}',
  ],
  media: false, // or 'media' or 'class'
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['.75rem', '1rem'], //font size, line height
      sm: ['.875rem', '2rem'],
      base: ['1rem', '1rem'],
      normal: ['1rem', '1rem'],
      lg: ['1.125rem', '1.125rem'],
      xl: ['1.25rem', '1.50rem'],
      '2xl': ['2rem', '5.5rem'],
      '3xl': ['3rem', '6.5rem'],
      '4xl': ['4rem', '7.5rem'],
      '5xl': ['5rem', '7.5rem'],
      '6xl': ['6rem', '8.5rem'],
      '7xl': ['7rem', '9.5rem'],
    },
    extend: {
      colors: {
        theme: {
          primary: 'var(--primary)',
          secondary: 'var(--secondary)',
          tertiary: 'var(--tertiary)',
          quaternary: 'var(--quaternary)',
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        stroke: 'stroke 1s cubic-bezier(0.65, 0, 0.45, 1) forwards infinite',
        scale: 'scale 1s ease-in-out infinite',
        flash: 'flash 1s ease-in-out infinite',
        flash1: 'flash 1s ease-in-out 1',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        stroke: {
          '100%': { strokeDashoffset: 0 },
        },
        scale: {
          '0%, 100%': { transform: 'none' },
          '50%': { transform: 'scale3d(1.1, 1.1, 1)' },
        },
        flash: {
          from: { backgroundColor: 'rgb(34 197 94)' },
          to: { backgroundColor: 'rgb(239 68 68)' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
