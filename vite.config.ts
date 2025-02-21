import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from "vite-tsconfig-paths"



// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),tsconfigPaths()],
  server: {
    host: '0.0.0.0',// Allows access on your network
    port: 5173, // Ensure the port is correctly set
  },
})
