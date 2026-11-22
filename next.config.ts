import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // The cost calculator was removed. Old links go to the quote form instead.
    return [{ source: "/estimator", destination: "/contact", permanent: true }];
  },
};

export default nextConfig;
