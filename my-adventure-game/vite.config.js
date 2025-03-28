import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/Light-the-torches-game-react/", // Make sure this matches your repo name
});
