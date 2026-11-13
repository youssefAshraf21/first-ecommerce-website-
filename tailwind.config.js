    /** @type {import('tailwindcss').Config} */
    export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
        fontFamily: {
            display: ['Archivo Black', 'sans-serif'],
            body: ['Inter', 'sans-serif'],
        },
        colors: {
            ink: '#1A1A1A',
            sand: '#F0EBE3',
            cream: '#FAF8F5',
            navy: '#1E2A3A',
            coral: '#E0533D',
            gold: '#C9A861',
        },
        },
    },
    plugins: [],
    }