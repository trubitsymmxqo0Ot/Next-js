import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { HeroProvider } from "@/provider/HeroProvider";
import Header from "@/component/UI/layout/Header";
import "./globals.css";
import { site } from "@/config/site.config";
import { layoutConfig } from "@/config/layout.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeroProvider>
          <Header />
          <main
            style={{
              height: `calc(100vh - ${layoutConfig.headerHeight} - ${layoutConfig.footerHeight})`,
            }}
          >
            {children}
          </main>
          <footer className="flex justify-center items-center" style={{ height: `${layoutConfig.footerHeight}` }}>
            {site.description}
          </footer>
        </HeroProvider>
      </body>
    </html>
  );
}
