import { defineConfig } from "vite";

// Замените 'repo-name' на НАЗВАНИЕ вашего репозитория на GitHub!
const repoName = "webLab-5";

export default defineConfig({
  base: `/${repoName}/`,
  build: {
    outDir: "dist" // так удобно публиковать на Pages без GitHub Actions
  }
});