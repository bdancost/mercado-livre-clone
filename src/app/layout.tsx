import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SupabaseProvider } from "@/lib/supabase-provider";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Adiciona display swap para melhor performance
  adjustFontFallback: true, // Melhora fallback de fontes
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: {
    default: "Mercado Livre Clone",
    template: "%s | Mercado Livre Clone",
  },
  description: "Um clone avançado do Mercado Livre para portfólio",
  keywords: ["ecommerce", "mercado livre", "nextjs"],
  authors: [{ name: "Daniel Fernandes", url: "https://github.com/bdancost" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://seu-site.com",
    siteName: "Mercado Livre Clone",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SupabaseProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};
