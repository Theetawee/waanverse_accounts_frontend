import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {ManifestOptions, VitePWA } from "vite-plugin-pwa";






const ManifestFile: Partial<ManifestOptions> = {
    background_color: "#ffffff",
    categories: ["social", "web", "account", "authentication", "security"],
    description:
        "Manage and control your authentication flow with WaanVerse Accounts. Streamlined user authentication, secure access, and personalized user profiles.",
    display: "standalone",
    icons: [
        {
            src: "https://files.waanverse.com/icons/48-m.png",
            sizes: "48x48",
            type: "image/png",
            purpose: "maskable",
        },
        {
            src: "https://files.waanverse.com/icons/72-m.png",
            sizes: "72x72",
            type: "image/png",
            purpose: "maskable",
        },
        {
            src: "https://files.waanverse.com/icons/96-m.png",
            sizes: "96x96",
            type: "image/png",
            purpose: "maskable",
        },
        {
            src: "https://files.waanverse.com/icons/128-m.png",
            sizes: "128x128",
            type: "image/png",
            purpose: "maskable",
        },

        {
            src: "https://files.waanverse.com/icons/192-m.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
        },
        {
            src: "https://files.waanverse.com/icons/512-m.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
        },
        {
            src: "https://files.waanverse.com/icons/48.png",
            sizes: "48x48",
            type: "image/png",
            purpose: "any",
        },
        {
            src: "https://files.waanverse.com/icons/72.png",
            sizes: "72x72",
            type: "image/png",
            purpose: "any",
        },
        {
            src: "https://files.waanverse.com/icons/96.png",
            sizes: "96x96",
            type: "image/png",
            purpose: "any",
        },
        {
            src: "https://files.waanverse.com/icons/128.png",
            sizes: "128x128",
            type: "image/png",
            purpose: "any",
        },

        {
            src: "https://files.waanverse.com/icons/192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
        },
        {
            src: "https://files.waanverse.com/icons/512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
        },
        {
            src: "https://files.waanverse.com/images/logo.svg",
            sizes: "any",
            type: "image/png",
        },
    ],
    name: "WaanVerse Accounts",
    short_name: "WaanVerse Accounts",
    start_url: "/",
    theme_color: "#ffffff",
    scope: "/",
    launch_handler: {
        client_mode: "navigate-new",
    },
    id: "/",
    dir: "ltr",
    lang: "en",
    orientation: "portrait-primary",
    display_override: ["standalone", "window-controls-overlay"],
    screenshots: [
        {
            src: "https://files.waanverse.com/images/logo.svg",
            sizes: "500x500",
            type: "image/png",
        },
        {
            src: "https://files.waanverse.com/images/logo.svg",
            sizes: "500x500",
            type: "image/png",
            form_factor: "wide",
        },
    ],

    edge_side_panel: {
        preferred_width: 540,
    },
};
















// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: "autoUpdate",
            workbox: {
                clientsClaim: true,
                skipWaiting: true,
                globPatterns: ["**/*"],
                cleanupOutdatedCaches: true,
            },
            injectRegister: "script-defer",
            manifest: ManifestFile,
            devOptions: {
                enabled: true,
            }
        }),
    ],
});
