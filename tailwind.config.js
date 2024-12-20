/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4169e1',
        'sec': '#5d81ee',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}



// module.exports = {
//   content: [
//     // './src/**/*.{html,js}',
//       'node_modules/preline/dist/*.js',
//   ],
//   plugins: [
//     // require('@tailwindcss/forms'),
//       require('preline/plugin'),
//   ],
// }

