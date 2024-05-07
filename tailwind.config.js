/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        colors: {
            primary: '#34caa5',
            secondary: '#3A3F51',
            success: '#00AC56',
            error: '#FF1F7D',
            warning: '#F5BF3D',
            white: 'FFFFFF',
            background: '#FDFDFD'
        },
        fontFamily: {
            jakarta: ['Plus Jakarta Sans', 'sans-serif']
        },
        extend: {}
    },
    plugins: []
};
