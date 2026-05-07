import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tanstackStart(),
    nitro({
      preset: "vercel",
    }),
    tailwindcss(),
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
