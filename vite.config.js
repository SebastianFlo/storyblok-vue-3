import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import fs from 'fs';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "src/styles/_variables.scss";
          @import "src/styles/_mixins.scss";
        `,
      },
    },
  },
  server: {
    https: {
      key: fs.readFileSync('./localhost-key.pem'),
      cert: fs.readFileSync('./localhost.pem'),
    },
    port: 3000,
  },
});
