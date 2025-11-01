import { defineConfig } from "vite";

const repoName = "webLab-5";

export default defineConfig({
  base: `/${repoName}/`,
  build: {
    outDir: "dist"
  }
});