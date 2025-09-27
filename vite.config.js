/* eslint-disable no-undef */
import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import viteImagemin from 'vite-plugin-imagemin';
import { webpPlugin } from './vite-webp-plugin.js';
import { htmlFiles } from './getHTMLFileNames';

const input = { main: resolve(__dirname, 'src/index.html') };
htmlFiles.forEach((file) => {
  input[file.replace('.html', '')] = resolve(__dirname, 'src', file);
});

export default defineConfig({
  base: '/vite-landing-template',
  root: 'src',
  publicDir: '../public',
  plugins: [
    handlebars({ 
      partialDirectory: resolve(__dirname, 'src/templates'),
      context: {
        siteName: 'Vite Landing Template',
        currentYear: new Date().getFullYear()
      }
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
    webpPlugin({
      quality: 80,
      generateWebp: true
    }),
  ],
  build: {
    rollupOptions: {
      input,
      output: {
        manualChunks: {
          vendor: ['swiper']
        }
      }
    },
    outDir: '../dist/',
    emptyOutDir: true,
    sourcemap: true,
    minify: false,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    host: true
  },
  preview: {
    port: 4173,
    open: true,
    host: true
  },
  css: {
    devSourcemap: true
  }
});
