/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
        },
        colors: {
            black: '#000000',
            purple: '#7A92E5',
            gray: '#7F7F7F',
            light_purple: '#D6DFFF',
            white: '#FFFFFF',
            red: '#DA0941',
        },
        fontFamily: {
            sans: [['"Manrope Variable"', ...defaultTheme.fontFamily.sans]],
        },
        extend: {},
    },
    plugins: [],
};
