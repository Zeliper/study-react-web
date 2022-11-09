import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    hmr: false,
  },
  plugins: [
    react({
      include: ["**/*.tsx", "**/*"],
    }),
  ],
});