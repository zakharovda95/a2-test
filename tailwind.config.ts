module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontSize: {
        'text-header': '20px',
        'text-description': '16px',
      },

      lineHeight: {
        'header-lh': '25px',
        'text-lh': '20px',
      },

      fontWeight: {
        bold: 'bold',
        normal: 'normal',
        light: '500',
        thin: '300',
      },

      spacing: {
        'padding-base': '2rem',
        'gap-lg': '40px',
      },
    },

    colors: {
      'white': '#fff',
      'black': '#000',
      'gray': '#686869',
      'lightgray': 'lightgray',
      'green': '#2dc574',
    },

    fontFamily: {
      'main': ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
};
