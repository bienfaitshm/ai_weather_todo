import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { netlifyPlugin } from "@netlify/remix-adapter/plugin";

export default defineConfig({
  // server: {
  //   port: 3000,
  // },
  plugins: [remix({
    ignoredRouteFiles: ["**/*.css"],
    future: {
      unstable_optimizeDeps: true,
      v3_relativeSplatPath: true,
      v3_fetcherPersist: true,
    },
  }), netlifyPlugin(), tsconfigPaths()],
});
