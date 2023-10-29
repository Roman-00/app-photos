import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

/**
 * Конфигурация приложения
 *
 * @link https://vitejs.dev/config/
 */
export default defineConfig({
    base:    '',
    plugins: [
        vue(),
        svgLoader(),
    ],
    build: {
        minify:            'terser',
        assetsInlineLimit: 1024,
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    css: {
        preprocessorOptions: {
            css:  { charset: false },
            scss: {
                sassOptions: {
                    outputStyle: 'expanded',
                },
                charset:        false,
                additionalData: `
                        @import "@/styles/_variables.scss";
                        @import "@/styles/_mixins.scss";
                    `
            }
        }
    },
});
