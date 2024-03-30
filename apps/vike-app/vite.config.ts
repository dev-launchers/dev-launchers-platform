import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';
import { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [react(), vike()],
  ssr: {
    noExternal: ['styled-components', '@emotion/*'],
  },
  resolve: {
    dedupe: ['styled-components'],
  },
};

export default config;
