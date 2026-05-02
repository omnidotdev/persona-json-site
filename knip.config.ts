import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: ["src/router.tsx", "src/routes/**/*.tsx"],
  project: ["src/**/*.{ts,tsx,css}"],
  ignore: ["**/*.gen.*"],
};

export default config;
