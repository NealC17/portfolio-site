import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If you deploy to https://<username>.github.io/<repo>/ (no custom domain),
// change base to "/<repo>/". With a custom domain (see public/CNAME),
// base should stay "/".
export default defineConfig({
  plugins: [react()],
  base: "/",
});
