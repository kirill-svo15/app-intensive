/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors:{
                'accent': '#B53471',
                'white': '#F1E8E8',
                'dark-purple': '#310C24',
                'black': '#1A0612',
                'purple': '#511734',
            },
            boxShadow: {
                '$bx-shw-accent':'0px 4px 4px rgba(181, 52, 113, 0.25)',
                '$bx-shw-16':'0px 3px 6px rgba(0, 0, 0, 0.16)',
                '$bx-shw-10':'0px 3px 6px rgba(0, 0, 0, 0.1)',
            },
            gradientColorStops:{
                from:{

                }
            }

        }
    },
    plugins:[]
}
