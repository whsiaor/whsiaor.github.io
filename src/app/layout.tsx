import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Cormorant } from "next/font/google";
import "../../public/styles/prism.css"
import "./globals.css";
import Navbar from "./_components/navbar";
import type { Viewport } from 'next';

const cormorant = Cormorant({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Sean's Next.js Blog with Github Pages`,
  description: `A statically generated blog example using Next.js and ${CMS_NAME}.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cormorant.className}>
        <Navbar />
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
};
