/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                gray: {
                    1: '#E0E0E0',
                    2: '#B5B5B5',
                    3: '#A2A2A2',
                    4: '#878787',
                    5: '#828282',

                },
                black: '#212121',
                red: '#E46D6D',
            },
            spacing: {
                container: '1240px'
            }
        }
    },
    plugins: [],

}

