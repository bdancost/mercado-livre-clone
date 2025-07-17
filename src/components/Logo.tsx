import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/logo/logo.svg"
        alt="Mercado Clone - Sua loja online de confiança"
        width={120} // Largura original do SVG
        height={40} // Altura original do SVG
        priority // Pré-carrega por ser importante
        className="h-10 w-auto"
      />
    </Link>
  );
}
