import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/53-54-use-local-storage-hook",
  plugins: [react()],
});
