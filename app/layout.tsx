import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/components/i18n-provider";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Isaac Wang | Full Stack & Web3 Developer",
  description:
    "Personal portal of Isaac Wang - Full Stack & Web3 Developer. Building innovative solutions at the intersection of web and blockchain technology.",
  keywords: [
    "Full Stack Developer",
    "Web3",
    "Blockchain",
    "React",
    "Next.js",
    "Isaac Wang",
  ],
  authors: [{ name: "Isaac Wang" }],
  openGraph: {
    title: "Isaac Wang | Full Stack & Web3 Developer",
    description: "Personal portal of Isaac Wang - Full Stack & Web3 Developer",
    type: "website",
    url: "https://ai-explorer.cn",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&f[]=instrument-sans@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="min-h-screen">
        <I18nProvider>{children}</I18nProvider>
        <Analytics />
      </body>
    </html>
  );
}
