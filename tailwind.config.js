  /** @type {import('tailwindcss').Config} */
 export default {
   content: [
    "./src/**/*.{html,js,jsx,png,svg,jpg,ttf}",
    "./public/**/*.{html,js,png,jpg,ttf,otf,woff,svg}"
  ],
    theme: {
      extend: {
        colors: {
          primary: '#A9531A',
        },
        dropShadow:{
          black: "2px 2px 4px rgba(0, 0, 0, 0.8)",
        },
        screens: {
          xxl: { max: '1500px' },
          xl: { max: '1300px' },
          lg: { max: '1024px' },
          md: { max: '768px' },
          sm: { max: '640px' },
          xs: { max: '500px' },
          xxs: { max: '400px' },
          xxxs: { max: '376px' },
          max_xxl: { min: '1501px', max: '1920px' },
          max_xl: { min: '1025px', max: '1500px' },
          max_lg: { min: '769px', max: '1024px' },
          max_md: { min: '768px', max: '768px' },
          max_sm: { min: '501px', max: '767px' },
          max_xs: { min: '401px', max: '500px' },
          max_xxs: { min: '350px', max: '400px' },
        },
      },
    },
    plugins: [],
  }