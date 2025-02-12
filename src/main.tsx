import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MarkdownApp from "./components/MarkdownApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MarkdownApp />
  </StrictMode>
);
