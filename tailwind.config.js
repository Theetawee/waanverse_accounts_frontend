/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "page-pattern":
                    "url('https://files.waanverse.com/images/gradbg.svg')",
                homebg: "url('https://files.waanverse.com/images/bg.svg')",
            },
            colors: {
                primary: {
                    50: "#f2f4fb",
                    100: "#e8eaf7",
                    200: "#d5daf0",
                    300: "#c5cae9",
                    400: "#a0a3d9",
                    500: "#8988cc",
                    600: "#776fbc",
                    700: "#655ea4",
                    800: "#534e85",
                    900: "#46446b",
                    950: "#2a273f",
                },
                gray: {
                    50: "#f2f2f2",
                    100: "#e6e6e6",
                    200: "#cccccc",
                    300: "#b3b3b3",
                    400: "#999999",
                    500: "#808080",
                    600: "#666666",
                    700: "#4d4d4d",
                    800: "#333333",
                    900: "#1a1a1a",
                },
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
