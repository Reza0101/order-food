/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'aboutImage': "url(/Images/about.png)"
      },
      borderRadius: {
        "4": "4px",
        "8": "8px",
        "16": "16px",
        "24": "24px",
        "32": "32px",
        "64": "64px",
      },
      boxShadow: {
        "drop-shadow-2": "0px 2px 2px 0px rgba(0, 0, 0, 0.25)",
        "drop-shadow-4": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        "drop-shadow-6": "0px 6px 6px 0px rgba(0, 0, 0, 0.25)",
        "drop-shadow-8": "0px 8px 8px 0px rgba(0, 0, 0, 0.25)",
        "drop-shadow-12": "0px 12px 12px 0px rgba(0, 0, 0, 0.25)",
        "drop-shadow-16": "0px 16px 16px 0px rgba(0, 0, 0, 0.25)",
        "cart-shadows":
          "0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.10), 0px 4px 4px 0px rgba(0, 0, 0, 0.09), 0px 9px 5px 0px rgba(0, 0, 0, 0.05), 0px 16px 6px 0px rgba(0, 0, 0, 0.01), 0px 25px 7px 0px rgba(0, 0, 0, 0.00)",
        "container-cart-shadows":
          "0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 3px 6px 0px rgba(0, 0, 0, 0.10), 0px 11px 11px 0px rgba(0, 0, 0, 0.09), 0px 24px 14px 0px rgba(0, 0, 0, 0.05), 0px 42px 17px 0px rgba(0, 0, 0, 0.01), 0px 66px 18px 0px rgba(0, 0, 0, 0.00)",
      },
      colors: {
        tint: {
          1: "#E5F2E9",
          2: "#CAE4D3",
          3: "#B0D7BD",
          4: "#96C9A7",
          5: "#7CBC91",
          6: "#61AE7B",
          7: "#4E9968",
        },
        shade: {
          1: "#396F4B",
          2: "#315F41",
          3: "#294F36",
          4: "#21402B",
          5: "#183020",
          6: "#102016",
          7: "#08100B",
        },
        gray: {
          1: "#F9F9F9",
          2: "#E1E1E1",
          3: "#EDEDED",
          4: "#CBCBCB",
          5: "#ADADAD",
          6: "#757575",
          7: "#717171",
          8: "#353535",
        },
        error: "#C30000",
        "error-light": "#ED2E2E",
        success: "#00966D",
        "success-light": "#00BA88",
        black: "#0C0C0C",
        primary: "#417F56",
        warning: "#A9791C",
        "warning-light": "#F4B740",
      },
    },
  },
};


