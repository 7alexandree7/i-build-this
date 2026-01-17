import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";


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
    <html lang="pt-br">
      <body
        className={`${outfit.className }antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
