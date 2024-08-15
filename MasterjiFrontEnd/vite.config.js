import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'dist', // Example, if index.html is in 'public' directory
  plugins: [react()],
})
