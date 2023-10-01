  const defaultTheme = require("tailwindcss/defaultTheme");

  /** @type {import('tailwindcss').Config} */

  module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      fontWeight: {
        'vt': 150, // Custom font weight thinner than font-thin
      },
      fontSize: {
        'ssss': '.30rem',
        'sss': '.50rem',
        'ss': '.55rem',
        'vs': '.65rem',
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '1xl': '1.4rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },   
      extend: {
        fontWeight: {
          'thin': 100,
      'light': 300,
      'normal': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700,
      'extrabold': 800,
      'black': 900,
          'vt': 150, // Custom font weight thinner than font-thin
        },
        colors: {
          primary: "#FF6DF1",
          btnBg: "#95513E",
          btnBorder: "#7A3D2CAF",
          sidebarBg: "#FFA000",
          sidebarBorder: "#DC8A00",
          linkColor: "#24B5F6",
          fontGray: "#454F5E",
        },
        height: {
          "10-p": "5%",
          "80-p": "80%",
          "t-product": "400px",
        },
        width: {
          "t-product": "950px",
        },
      },
      maxWidth: {
        480: "480px",
        550: "550px",
      },
      screens: {
        sm: { min: "240px", max: "475px" },
        ...defaultTheme.screens,
      },
      fontFamily: {
        poppin: ["Poppins", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
        montserrat: ['Montserrat Alternates', 'sans-serif'],
        signika: ['Signika Negative'],
        mono: ["Courier New", "monospace"],
        helvetica: ["Trebuchet MS", "Helvetica", "sans-serif"],
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        serif: ["Times New Roman", "serif"],
        avenir: [
          "avenir-lt-w01_35-light1475496",
          "avenir-lt-w05_35-light",
          "sans-serif",
        ],
      },
      letterSpacing: {
        widest2: "0.8em",
        widest3: "0.6em",
        widest1: "0.4em",
        wide: "0.1em",
      },

    },
    plugins: [],
  };
