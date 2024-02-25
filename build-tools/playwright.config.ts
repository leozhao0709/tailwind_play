import { merge } from 'webpack-merge';
import commonConfig from '../build-common-config/playwright.config';

export default merge(commonConfig, {
  testDir: '../e2e',
  testMatch: ['e2e/**/*.e2e.test.ts'],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'pnpm build',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    stdout: 'ignore',
    stderr: 'pipe',
    timeout: 1000 * 10,
  },
});
