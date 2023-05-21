import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
    // React
    integrations: [react()],
    vite: {
      plugins: [yaml()]
    }
  });