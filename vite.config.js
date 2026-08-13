import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/Asiurza-Xtech-PVT-LTD-service/",
  plugins: [react(), tailwindcss()],
});