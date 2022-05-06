module.exports = {
  content: [
    './dist/index.html'
  ],
  theme: {
    fontFamily: {
      'nunito-bold': ['nunito-bold',],
      'nunito-regular': ['nunito-regular',],
    },

    screens: {

      'sm': '640px',
      //=> @media (min-width: 648px) { ...)
      
      'md': '768px',
      //>@media (min-width: 768px) { ... }
      
      'lg': '1024px',
      //> @media (min-width: 1024px) {...}
      
      'x1': '1280px',
      //@media (min-width: 1280px) { ...)
  },
    extend: {
      backgroundImage: theme =>({
        'hero-pattern': "url('images/hero-pattern.png')"
      }),
      colors: {
        'primary' :'#83D483',
        'secondary' :'#6C6C6C',
      },
    },
  },
  plugins: [],
}
