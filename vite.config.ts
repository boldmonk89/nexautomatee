import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tanstackRouter(),
    tanstackStart(),
    nitro({
      preset: "vercel",
    }),
    tailwindcss(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssr: {
    noExternal: [
      "@tanstack/react-query",
      "@tanstack/react-router",
      "@tanstack/react-start",
      "@tanstack/router-plugin",
      "lucide-react",
      "sonner",
      "clsx",
      "tailwind-merge",
      "class-variance-authority",
    ],
  },
});
