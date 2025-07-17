"use client";
import { useRouter } from "next/navigation";
import type { Route } from "next";

interface ProductButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export function ProductButton({ className, children }: ProductButtonProps) {
  const router = useRouter();

  const navigateToProducts = () => {
    router.push("/produtos" as Route);
  };

  return (
    <button
      onClick={navigateToProducts}
      className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ${className}`}
    >
      {children || "Ver Produtos"}
    </button>
  );
}
