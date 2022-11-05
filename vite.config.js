import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  build: {
    sourcemap: true,
    assetsInlineLimit: 0,
    target: ['firefox102', 'safari15', 'chrome90'],
    reportCompressedSize: true,
  },
  plugins: [svelte()],
  server: {
    open: '/',
  },
  preview: {
    port: 4173,
  },
});
