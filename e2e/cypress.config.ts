import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: '8hi4as',
  e2e: nxE2EPreset(__filename, { cypressDir: 'src' }),
});
