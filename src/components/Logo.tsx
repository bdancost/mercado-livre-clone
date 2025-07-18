"use client";

import Link from "next/link";
import Image from "next/image";
import { memo } from "react";

interface LogoProps {
  className?: string;
  logoClassName?: string;
}

export const Logo = memo(function Logo({
  className = "",
  logoClassName = "h-10 w-auto",
}: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 ${className}`}
      aria-label="Ir para página inicial"
    >
      <Image
        src="/logo/logo.svg"
        alt="Mercado Clone - Sua loja online de confiança"
        width={120}
        height={40}
        priority
        className={logoClassName}
        quality={100} // Garante qualidade máxima para a logo
        onError={(e) => {
          // Fallback caso a imagem não carregue
          (e.target as HTMLImageElement).src = "/logo/logo-fallback.png";
        }}
      />
      {/* Adicionando texto para SEO (oculto visualmente) */}
      <span className="sr-only">Mercado Clone</span>
    </Link>
  );
});
