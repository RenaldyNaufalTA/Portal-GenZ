import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            animation: {
                fade: "fadeOut 5s ease-in-out",
            },

            // that is actual animation
            keyframes: (theme) => ({
                fadeOut: {
                    "0%": { backgroundColor: theme("colors.green.500") },
                    "100%": {
                        backgroundColor: theme("colors.transparent"),
                        visibility: "hidden",
                    },
                },
            }),
        },
    },

    plugins: [forms, require("daisyui")],
};
