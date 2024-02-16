import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { ManifestOptions, VitePWA } from "vite-plugin-pwa";

const ManifestFile: Partial<ManifestOptions> = {
    background_color: "#ffffff",
    categories: ["Authentication", "Security"],

    description:
        "Waanverse Accounts - Manage and control your authentication flow with Waanverse Accounts. Streamlined user authentication, secure access, and personalized user profiles.",
    display: "standalone",
    icons: [
        {
            src: "/icons/48.png",
            sizes: "48x48",
            type: "image/png",
            purpose: "maskable",
        },
        {
            src: "/icons/72.png",
            sizes: "72x72",
            type: "image/png",
            purpose: "maskable",
        },
        {
            src: "/icons/96.png",
            sizes: "96x96",
            type: "image/png",
            purpose: "maskable",
        },
        {
            src: "/icons/128.png",
            sizes: "128x128",
            type: "image/png",
            purpose: "maskable",
        },

        {
            src: "/icons/192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
        },
        {
            src: "/icons/512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
        },
        {
            src: "/icons/48.png",
            sizes: "48x48",
            type: "image/png",
            purpose: "any",
        },
        {
            src: "/icons/72.png",
            sizes: "72x72",
            type: "image/png",
            purpose: "any",
        },
        {
            src: "/icons/96.png",
            sizes: "96x96",
            type: "image/png",
            purpose: "any",
        },
        {
            src: "/icons/128.png",
            sizes: "128x128",
            type: "image/png",
            purpose: "any",
        },

        {
            src: "/icons/192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
        },
        {
            src: "/icons/512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
        },
        {
            src: "/logo.svg",
            sizes: "any",
            type: "image/svg+xml",
        },
        {
            src: "/icons/1024.png",
            sizes: "1024x1024",
            type: "image/png",
            purpose: "maskable",
        },
    ],
    name: "Waanverse Accounts",
    short_name: "Accounts",
    start_url: "/",
    theme_color: "#164e63",
    scope: "/",
    launch_handler: {
        client_mode: "navigate-new",
    },
    id: "/",
    dir: "ltr",
    lang: "en",
    orientation: "portrait-primary",
    display_override: ["standalone", "window-controls-overlay"],
    edge_side_panel: {
        preferred_width: 540,
    },
    screenshots: [
        {
            src: "/logo.svg",
            sizes: "500x500",
            form_factor: "wide",
        },
        {
            src: "/logo.svg",
            sizes: "500x500",
        },
    ],
};

export default defineConfig({
    publicDir: "public",
    plugins: [
        react(),
        VitePWA({
            registerType: "autoUpdate",

            workbox: {
                globPatterns: ["**/*"],
                clientsClaim: true,
                skipWaiting: true,
                cleanupOutdatedCaches: true,
                disableDevLogs: true,
                runtimeCaching: [
                    {
                        urlPattern: /^https:\/\/files\.waanverse\.com\/.*/i,
                        handler: "CacheFirst",
                        options: {
                            cacheName: "waanverse-files-cache",
                            expiration: {
                                maxEntries: 10,
                                maxAgeSeconds: 60 * 60 * 24 * 30, // <== 30 days
                            },
                            cacheableResponse: {
                                statuses: [0, 200],
                            },
                        },
                    },
                ],
            },
            devOptions: { enabled: false },
            manifest: ManifestFile,
            injectRegister: "script-defer",
            includeAssets: ["**/*"],
        }),
    ],
    base: "./",
});
