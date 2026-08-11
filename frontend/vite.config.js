import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false, // keep prod source unreadable; enable temporarily for debugging only
  },
  server: {
    port: 5173,
  },
});
