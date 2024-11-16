import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'mgdkamqbxvrywiscpsvh.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'www.ikea.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ]
  }
};

export default nextConfig;
