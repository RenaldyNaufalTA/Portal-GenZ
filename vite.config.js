import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.jsx",
            refresh: true,
        }),
        react(),
    ],
    build: {
        outDir: "public/build", // Ensure build output is in the right directory
        rollupOptions: {
            input: "resources/js/app.jsx",
        },
    },
});
