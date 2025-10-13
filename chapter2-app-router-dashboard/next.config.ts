import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    cacheComponents: true, // ppr: "incremental" ==> useless
  },
};

export default nextConfig;
