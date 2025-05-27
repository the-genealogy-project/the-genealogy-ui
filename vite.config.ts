import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env: Record<string, string> = loadEnv(mode, process.cwd(), "");

  return {
    server: { port: 3000, strictPort: true },
    define: {
      global: {},
      "process.env.VITE_GRAPHQL_ENDPOINT": JSON.stringify(
        env.VITE_GRAPHQL_ENDPOINT,
      ),
    },
    plugins: [react()],
  };
});
