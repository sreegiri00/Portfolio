import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio/', // 👈 VERY IMPORTANT
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
