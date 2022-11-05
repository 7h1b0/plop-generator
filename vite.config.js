import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    modulePreload: false,
    sourcemap: false,
    assetsInlineLimit: 0,
    target: ['firefox102', 'safari15', 'chrome90'],
    reportCompressedSize: true,
  },
  server: {
    open: '/',
  },
  preview: {
    port: 4173,
  },
});
