import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "next/link": path.resolve(__dirname, "src/adapters/next-link.tsx"),
      "next/image": path.resolve(__dirname, "src/adapters/next-image.tsx"),
      "next/navigation": path.resolve(__dirname, "src/adapters/next-navigation.ts"),
    },
  },
});
