import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // The home route reads src/site/home-markup.html at runtime; make sure that
  // file ships inside the serverless function bundle on Vercel.
  outputFileTracingIncludes: {
    "/": ["./src/site/**"],
  },
};

export default nextConfig;
