import path from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr({ svgrOptions: { icon: true } }), react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve('src') }],
  },
})
