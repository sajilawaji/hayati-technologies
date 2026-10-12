import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/hayati-technologies",
  assetPrefix: "/hayati-technologies/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

