/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            jakarta: ['Plus Jakarta Sans', 'sans-serif']
        },
        extend: {
            colors: {
                primary: '#34caa5',
                secondary: '#3A3F51',
                success: '#00AC56',
                error: '#FF1F7D',
                warning: '#F5BF3D',
                background: '#FDFDFD'
            }
        }
    },
    plugins: []
};
