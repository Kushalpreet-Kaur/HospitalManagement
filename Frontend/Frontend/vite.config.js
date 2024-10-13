import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        'C:/Users/kusha/OneDrive/Desktop/Hospital Management/Frontend/node_modules',
        'C:/Users/kusha/OneDrive/Desktop/Hospital Management/Frontend/Frontend/src'
      ]
    }
  }
})
