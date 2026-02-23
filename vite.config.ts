import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],

  build: {
    manifest: true,
    outDir: "dist",
  },

  base: "/wp-content/themes/my-theme/dist/",
});
