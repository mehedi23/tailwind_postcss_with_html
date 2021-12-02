module.exports = {
  mode: "jit",
  purge: [
    './public/**/*.html',
    './public/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      '20': '5rem',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'dark': '#1C2833',
      'button': '#3498DB',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'blue-transparent' : '#3498DB'
    }),
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      'primary': '#3498DB'
    }),
    extend: {
      backgroundImage: {
        banner: "url('https://www.setaswall.com/wp-content/uploads/2017/11/Aquarium-Wallpaper-30-3840x2400.jpg')",
        banner_2: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Aquarium_in_HK_Ocean_Park.jpg/1280px-Aquarium_in_HK_Ocean_Park.jpg')"
      }
    },
    colors: {
      primary: '#2C3E50',
      white: '#ffffff',
      light: '#D5D8DC',
      paragraph: '#808B96',
      sky : '#3498DB'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
