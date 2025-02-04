import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Ensure Vite correctly resolves routes
  server: {
    historyApiFallback: true, // Redirects unknown routes to index.html
  },
});
