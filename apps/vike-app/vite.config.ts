import react from '@vitejs/plugin-react';
import path, { resolve } from 'path';
import vike from 'vike/plugin';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env': env,
    },
    plugins: [react(), vike()],
    envPrefix: 'NEXT_PUBLIC_',
    ssr: {
      noExternal: ['styled-components', '@emotion/*'],
    },
    resolve: {
      alias: {
        '#root': path.resolve(__dirname, 'src'),
      },
    },
  };
});
