import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react(), basicSsl()],
  resolve: {
    alias: {
      app: "/src/app",
      pages: "/src/pages",
      widgets: "/src/widgets",
      features: "/src/features",
      entities: "/src/entities",
      shared: "/src/shared",
    },
  },
});
