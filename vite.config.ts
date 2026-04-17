import type { Plugin } from "vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

/** En dev : le navigateur POSTe ici pour afficher les erreurs EmailJS dans le terminal de `npm run dev`. */
function devEmailJsLogPlugin(): Plugin {
  return {
    name: "dev-emailjs-client-log",
    configureServer(server) {
      server.middlewares.use("/__cantin/dev-emailjs-log", (req, res, next) => {
        if (req.method !== "POST") {
          next();
          return;
        }
        const chunks: Buffer[] = [];
        req.on("data", (c: Buffer) => chunks.push(c));
        req.on("end", () => {
          const raw = Buffer.concat(chunks).toString("utf8");
          try {
            const payload = JSON.parse(raw) as unknown;
            console.error("\n──────── EmailJS (erreur remontée du navigateur) ────────\n");
            console.error(JSON.stringify(payload, null, 2));
            console.error("──────────────────────────────────────────────────────────\n");
          } catch {
            console.error("\n──────── EmailJS (corps non-JSON) ────────\n", raw, "\n");
          }
          res.statusCode = 204;
          res.end();
        });
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), devEmailJsLogPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "react": path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
}));
