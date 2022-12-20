import { devices } from '@playwright/experimental-ct-svelte';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

const config = {
  testDir: './src',
  snapshotDir: './src/__snapshots__',
  fullyParallel: true,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    ctPort: 3100,
    ctViteConfig: {
      plugins: [
        svelte({
          preprocess: [sveltePreprocess({ typescript: true })]
        })
      ]
    }
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox']
      }
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari']
      }
    }
  ]
};

export default config;
