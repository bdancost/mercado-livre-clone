import type { Route } from "next";

declare module "next/navigation" {
  interface NextNavigation {
    push(href: Route | string): void;
  }
}
