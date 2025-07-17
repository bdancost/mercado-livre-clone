"use client";
import { useRouter } from "next/navigation";
import type { Route } from "next";

interface NavigationButtonProps {
  href: Route | string;
  className?: string;
  children: React.ReactNode;
}

export function NavigationButton({
  href,
  className = "",
  children,
}: NavigationButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(href as Route)}
      className={`px-8 py-4 bg-indigo-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition-all transform hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
}
