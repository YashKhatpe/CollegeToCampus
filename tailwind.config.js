/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        3: '3px',
      },
      blur: {
        'custom': '6px', 
      },
      colors: {
        gray: {
          100: "#feffff",
          200: "#f8fbfc",
          300: "#0d1b2a",
          400: "rgba(0, 0, 0, 0.74)",
        },
        lightslategray: "#778da9",
        "text-brand-on-brand": "#f5f5f5",
        "background-default-default": "#fff",
        "border-default-default": "#d9d9d9",
        "text-default-default": "#1e1e1e",
        silver: "#b8c0cc",
        primary: "#0d1b2a",
        steelblue: "#5f7ca0",
        black: "#000",
        darkslategray: {
          100: "#404f5e",
          200: "#494949",
        },
        "border-brand-default": "#2c2c2c",
        skyblue: "#6db2c7",
        gainsboro: "#e0e1dd",
        mediumblue: "#0038ff",
        "schemes-on-secondary-container": "#1d192b",
        aliceblue: "#f5faff",
      },
      spacing: {
        "space-200": "8px",
        "space-300": "12px",
        "space-400": "16px",
      },
      fontFamily: {
        "single-line-body-base": "Inter",
        lato: "Lato",
        poppins: "Poppins",
        roboto: "Roboto",
        inherit: "inherit",
      },
      borderRadius: {
        "21xl": "40px",
        lg: "18px",
        mini: "15px",
        "81xl": "100px",
        "6xs": "7px",
        "6xl": "25px",
        "9980xl": "9999px",
        "23xl": "42px",
        xl: "20px",
        "34xl": "53px",
        "radius-200": "8px",
        "corner-small": "8px",
        "radius-full": "9999px",
      },
    },
    borderWidth: {
      3: "3px",
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      "10xl": "29px",
      "4xl": "23px",
      "45xl": "64px",
      "19xl": "38px",
      "32xl": "51px",
      "31xl": "50px",
      "11xl": "30px",
      "21xl": "40px",
      lgi: "19px",
      lg: "18px",
      "30xl": "49px",
      "3xl": "22px",
      mini: "15px",
      sm: "14px",
      "6xl": "25px",
      "13xl": "32px",
      "7xl": "26px",
      "29xl": "48px",
      "5xl": "24px",
      "5xs": "8px",
      "6xs": "7px",
      xs: "12px",
      "3xs": "10px",
      "39xl": "58px",
      "27xl": "46px",
      "16xl": "35px",
      "35xl": "54px",
      "24xl": "43px",
      "46xl": "65px",
      "20xl": "39px",
      "33xl": "52px",
      "17xl": "36px",
      "8xl": "27px",
      inherit: "inherit",
    },
    screens: {
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      lg: {
        max: "1200px",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
