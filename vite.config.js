import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base :"Khmer-Stay-booking",
define: {
    // Expose env vars to your app
    'process.env': process.env,
  },
 
});