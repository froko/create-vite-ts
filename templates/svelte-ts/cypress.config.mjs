import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1200,
    viewportHeight: 800,
    video: false,
    testIsolation: false
  },
  component: {
    viewportWidth: 1200,
    viewportHeight: 800,
    devServer: {
      framework: 'svelte',
      bundler: 'vite'
    }
  }
});
