module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: "jit",
  theme: {
      extend: {
          zIndex: {
              '1': '1',
          },
          colors: {
              primary: '#6B61FF',
              primaryInactive: '#B7B3FF',
              primaryDark: '#584CFF',
              secondary: '#818181',
              secondaryDark: '#37354D',
              secondaryMedium: '#565379',
              'from-blue': '#746BFF',
              'to-blue': '#1FB4FF',
              background: '#F6F5FF',
          },
          minWidth: {
              '350px': '350px',
          },
      },
  },
  plugins: [],
};
