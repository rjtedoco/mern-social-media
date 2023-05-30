import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

/** @type {import('vite').UserConfig} */
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  esbuild: {
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },

  resolve: {
    alias: {
      components: "/src/components",
      "@scenes": "/src/scenes",
      "@state": "/src/state",
    },
  },
});
