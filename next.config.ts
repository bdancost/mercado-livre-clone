import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configurações principais
  output: "standalone",
  compress: true,
  productionBrowserSourceMaps: true,

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
        // Novo header para CSP
        {
          key: "Content-Security-Policy",
          value:
            "default-src 'self'; img-src 'self' data: https://*.supabase.co; script-src 'self' 'unsafe-inline'",
        },
      ],
    },
  ],

  // Otimização de Imagens (Ajustado)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.supabase.co",
      },
    ],
    minimumCacheTTL: 86400,
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Transpilação (Ajustado)
  transpilePackages: [
    "@supabase/auth-helpers-nextjs",
    "@testing-library/react",
    "@heroicons/react", // Adicione se estiver usando
  ],

  // Experimental (Ajustado)
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
      allowedOrigins: [
        process.env.NEXT_PUBLIC_SITE_URL || "localhost:3000",
        "*.vercel.app",
      ],
    },
    optimizePackageImports: [
      "@supabase/supabase-js",
      "@heroicons/react/24/outline",
    ],
    // Novas configurações
    typedRoutes: true, // Habilita rotas tipadas
    optimizeServerReact: true, // Otimiza React no server
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
