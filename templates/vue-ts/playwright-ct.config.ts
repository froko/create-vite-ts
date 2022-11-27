import type { PlaywrightTestConfig } from '@playwright/experimental-ct-vue';
import { devices } from '@playwright/experimental-ct-vue';

const config: PlaywrightTestConfig = {
  testDir: './src',
  snapshotDir: './src/__snapshots__',
  fullyParallel: true,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    ctPort: 3100
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
