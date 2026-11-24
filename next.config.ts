import type { NextConfig } from "next";

// GitHub Pages: site is a static export served under /<repo>.
// The deploy workflow sets NEXT_PUBLIC_BASE_PATH (e.g. "/hakangursoy"); locally it is empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
