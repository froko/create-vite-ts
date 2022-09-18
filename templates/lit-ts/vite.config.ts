import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/@fortawesome/fontawesome-free/sprites/solid.svg',
          dest: '@fortawesome/fontawesome-free/sprites'
        }
      ]
    })
  ]
});
