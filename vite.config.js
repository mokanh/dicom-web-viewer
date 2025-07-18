import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: [],
      manifest: {
        name: "dwv-react",
        short_name: "dwv-react",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#4DBA87",
        scope: ".",
        start_url: "index.html",
      }
    })
  ],
  server: {
    proxy: {
      '/studies': import.meta.env.VITE_ORTHANC_URL,
      '/instances': import.meta.env.VITE_ORTHANC_URL,
      '/series': import.meta.env.VITE_ORTHANC_URL
    }
  }
})
