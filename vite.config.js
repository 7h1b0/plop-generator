import { defineConfig } from 'vite';
import { minify } from 'html-minifier-terser';

export default defineConfig({
  build: {
    modulePreload: false,
    sourcemap: false,
    assetsInlineLimit: 0,
    reportCompressedSize: true,
  },
  server: {
    open: '/',
  },
  preview: {
    port: 4173,
  },
  plugins: [
    {
      name: 'minify-html',
      enforce: 'post',
      apply: 'build',
      transformIndexHtml: (html) => {
        return minify(html, {
          removeComments: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: false,
          removeEmptyAttributes: true,
          minifyCSS: true,
          minifyJS: true,
          minifyURLs: true,
        });
      },
    },
  ],
});
