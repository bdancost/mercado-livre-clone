import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configurações principais
  output: "standalone",
  compress: true,
  productionBrowserSourceMaps: true,
  instrumentationHook: true,

  // Segurança
  poweredByHeader: false,
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "X-Frame-Options",
          value: "DENY",
        },
      ],
    },
  ],

  // Imagens
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.supabase.co",
      },
    ],
    minimumCacheTTL: 86400,
  },

  // Transpilação
  transpilePackages: [
    "@supabase/auth-helpers-nextjs",
    "@testing-library/react",
  ],

  // Experimental
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
      allowedOrigins: [process.env.NEXT_PUBLIC_SITE_URL || "localhost:3000"],
    },
    optimizePackageImports: ["@supabase/supabase-js"],
  },
};

export default nextConfig;
