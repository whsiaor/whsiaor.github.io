import Footer from "@/app/_components/footer";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Cormorant } from "next/font/google";

import "./globals.css";
import Navbar from "./_components/navbar";

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
        <Footer />
      </body>
    </html>
  );
}
