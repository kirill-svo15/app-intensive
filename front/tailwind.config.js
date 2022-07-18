/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors:{
                'accent': {
                    DEFAULT:'#B53471',
                    30: 'rgba(181, 52, 113, 0.3)',
                    40: 'rgba(181, 52, 113, 0.4)',
                    'white': {
                        DEFAULT: '#F1E8E8',
                        20: 'rgba(255,255,255, 0.2)'
                    },
                },

                'dark-purple': '#310C24',
                'black': '#1A0612',
                'purple': '#511734',
                'brown':'#8A7474',
            },
            boxShadow: {
                'accent':'0 4px 4px rgba(181, 52, 113, 0.25)',
                'bx-shw-16':'0 3px 6px rgba(0, 0, 0, 0.16)',
                'bx-shw-10':'0 3px 6px rgba(0, 0, 0, 0.1)',
            },
            // keyframes:{
            //     opac:{
            //         '0%':{opacity:'0'},
            //         '100%':{opacity:'1'}
            //     }
            // },
            // animation:{
            //     'opac': 'opacity 3s '
            // },
        }
    },
    plugins:[]
}
