import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
    test: {
      coverage: {
        reporter: ['text', 'html'],
        exclude: [
          'node_modules/',
          'src/setupTests.ts',
        ],
      },
      environment: 'jsdom',
      globals: true,
      setupFiles: './src/setupTests.ts',
    },
});
