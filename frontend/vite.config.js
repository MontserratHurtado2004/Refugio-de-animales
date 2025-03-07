import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5174, // O el puerto que estás usando
    open: true,
  },
  plugins: [react()],
});
