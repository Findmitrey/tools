import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [react(), eslint(), tsconfigPaths()],
  server: {
    port: 5000,
    hmr: {
      overlay: false,
    },
  },
  resolve: {
    alias: {
      src: '/src',
    },
  },
});
