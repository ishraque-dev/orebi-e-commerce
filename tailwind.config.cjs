/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        container: '1200px',
      },
      fontFamily: {
        dm: ['DM Sans', 'sans-serif'],
      },
      spacing: {
        header_padding: '103px',
      },
      colors: {
        'primary-black': '#262626',
      },
      boxShadow: {
        customShadow:
          '0 1px 3px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 6%), 0 0 2px rgb(0 0 0 / 7%);',
      },

      screens: {
        tablet: '640px',
        // => @media (min-width: 640px) { ... }
        mobile: '414px',
        xs_mobile: '375px',
        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }

        desktop: '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
