module.exports = {
    darkMode: 'class',
    content: [
        './src/**/*.{html,js}',
        './node_modules/flowbite/**/*.js', // Add this line
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Iosevka", ...defaultTheme.fontFamily.sans], // Set Iosevka as the default sans font
                mono: ["Iosevka", ...defaultTheme.fontFamily.mono], // Optional: Set Iosevka as the default monospace font
            },
        },
    },
    plugins: [
        require('flowbite/plugin'), // Add this line
    ],
};
