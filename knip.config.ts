import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: ["src/router.tsx", "src/routes/**/*.tsx"],
  project: ["src/**/*.{ts,tsx}"],
  ignore: ["**/*.gen.*"],
  ignoreDependencies: [
    // Vite plugins loaded dynamically
    "@vitejs/plugin-react",
    "vite-plugin-mkcert",
  ],
};

export default config;
