import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingWhatsApp } from "@/components/conversion/FloatingWhatsApp";
import { siteConfig } from "@/config/site";
import { isPreview } from "@/lib/seo/environment";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.defaultTitle, template: "%s | IPTVBR" },
  description: siteConfig.defaultDescription,
  alternates: { canonical: siteConfig.url + "/" },
  robots: {
    index: !isPreview,
    follow: !isPreview,
    googleBot: { index: !isPreview, follow: !isPreview, "max-image-preview": "large" }
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    url: siteConfig.url + "/"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <SiteHeader />
        {children}
        <FloatingWhatsApp />
        <SiteFooter />
      </body>
    </html>
  );
}