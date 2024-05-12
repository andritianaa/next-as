import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next AS: Let's Build faster",
  description: `Next AS is a boilerplate project based on Next.js, a React framework. It provides a starting point for building web applications with modern tooling and best practices.`,
  openGraph: {
    title: "Next AS: Let's Build faster",
    description: `Next AS is a boilerplate project based on Next.js, a React framework. It provides a starting point for building web applications with modern tooling and best practices.`,
    url: "https://nextas.vercel.app",
    siteName: "Next AS",
    images: [
      {
        url: "https://nextas.vercel.app/preview.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://nextas.vercel.app/preview.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background  bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent",
          inter.className
        )}
      >
        <Providers>
          <NextTopLoader showSpinner={false}/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
