module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#212121',
        grey: '#f0f3f5',
        orange: '#fb9801',
        // grey: "#a4a4a4",
        // darkGrey: "#272727",
        // contentGrey: "#181818",
        error: '#f44336',
        success: '#00FF00',
        facebook: '#1877f2',
        twitter: '#1da1f2',
        youtube: '#ff0000',
        instagram: '#c32aa3',
        whatsapp: '#25d366',
        telegram: '#0088cc',
        linkedin: '#0e76a8',
      },
      borderRadius: {
        large: '12px',
      },
    },
  },
  // darkMode: 'media', // or 'media' or 'class'
  variants: {
    extend: {},
  },
  plugins: [],
}
