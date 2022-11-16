/** @type {import('tailwindcss').Config} */
const {color} = require('./public/css/tailwind')
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            ...defaultTheme.screens,
            "3xl": "1600px",
            tablet: "640px",
            // => @media (min-width: 640px) { ... }
        },
    },
    plugins: [color],
};
