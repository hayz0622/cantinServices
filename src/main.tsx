import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import logo from "@/assets/logo.png";

// Use the site logo as the favicon (Vite resolves the imported image to a URL).
const faviconId = "site-favicon";
const existing = document.getElementById(faviconId) as HTMLLinkElement | null;
if (existing) {
  existing.href = logo;
} else {
  const link = document.createElement("link");
  link.id = faviconId;
  link.rel = "icon";
  link.type = "image/png";
  link.href = logo;
  document.head.appendChild(link);
}

createRoot(document.getElementById("root")!).render(<App />);
