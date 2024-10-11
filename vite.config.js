import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: process.env.PORT || 7777, // Usa la variable de entorno PORT en Render
  },
  build: {
    outDir: "dist", // Asegúrate de que Render publique desde el directorio dist
  },
  base: "/", // Asegúrate de que todas las rutas usen la raíz correctamente
});
