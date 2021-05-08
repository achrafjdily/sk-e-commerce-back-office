module.exports = {
  important: true,
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'moenn-warn': {
          '50': '#fdf6f5',
          '100': '#fbedeb',
          '200': '#f4d3cc',
          '300': '#edb8ad',
          '400': '#e08270',
          '500': '#d34d32',
          '600': '#be452d',
          '700': '#9e3a26',
          '800': '#7f2e1e',
          '900': '#672619'
        },
        'moenn-primary': {
          '50': '#f7fafc',
          '100': '#eff5fa',
          '200': '#d6e5f1',
          '300': '#bed5e9',
          '400': '#8db6d9',
          '500': '#5c96c8',
          '600': '#5387b4',
          '700': '#457196',
          '800': '#375a78',
          '900': '#2d4a62'
        },
        'moenn-accent': {
          '50': '#f6f7f7',
          '100': '#eeeeef',
          '200': '#d4d6d7',
          '300': '#bbbdbf',
          '400': '#878b8f',
          '500': '#54595f',
          '600': '#4c5056',
          '700': '#3f4347',
          '800': '#323539',
          '900': '#292c2f'
        },
      },
      boxShadow: {
        'md-right': '2px 0 10px -1px rgba(0,0,0,0.75)'
      },
      spacing: {
        '240': '60rem',
      },
      minWidth: {
        '240': '60rem',
      },
      screens: {
        print: { 'raw': 'print' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography')
  ],
}