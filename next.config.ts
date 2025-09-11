import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://sejdaw0pnkrbbizs.public.blob.vercel-storage.com/**')],
  },
};

export default nextConfig;
