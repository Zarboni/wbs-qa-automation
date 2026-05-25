import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  retries: 1,

  reporter: [['html']],

  projects: [
    {
      name: 'ui',

      testMatch: '**/*.ui.spec.ts',

      use: {
        baseURL: 'https://automationintesting.online',
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure'
      }
    },

    {
      name: 'api',

      testMatch: '**/*.api.spec.ts',

      use: {
        baseURL: 'https://restful-booker.herokuapp.com'
      }
    }
  ]
});