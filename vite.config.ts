// Shared Vite + TanStack Start config. Do NOT re-add these plugins manually
// or the app will break with duplicates:
//   - TanStack Start, React, Tailwind, tsconfig paths, Nitro,
//     VITE_* env injection, @ path alias, React/TanStack dedupe.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts.
    server: { entry: "server" },
  },
});
