
import type { NextConfig } from "next";

const repo = "hayati-technologies";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repo}`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
