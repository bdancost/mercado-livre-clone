// middleware.js
import { NextResponse } from "next/server";

export function middleware() {
  const csp = `
    default-src 'self';
    script-src 'self' ${
      process.env.NODE_ENV === "development" ? "'unsafe-eval'" : ""
    };
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: blob: https://http2.mlstatic.com;
    font-src 'self';
    connect-src 'self' https://api.mercadolibre.com;
    frame-src 'none';
    base-uri 'self';
    form-action 'self';
  `
    .replace(/\s{2,}/g, " ")
    .trim();

  const response = NextResponse.next();
  response.headers.set("Content-Security-Policy", csp);
  return response;
}
