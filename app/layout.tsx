import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header/header";
import { ClerkProvider } from "@clerk/nextjs";


export const metadata: Metadata = {
  title: "I build this",
  description: "iBuildThis is a plataform for developers to share their projects",
};

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="pt-br">
        <body
          className={`${outfit.className}antialiased`}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
