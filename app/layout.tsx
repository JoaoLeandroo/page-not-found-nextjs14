import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const font = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Page Error Nextjs v14",
  description: "Estudando o roteamento das rotas no Nextjs v14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div>
          <header className="w-full bg-blue-500 h-11"><Link href={'/'}>Home</Link></header>
          {children}
        </div>
      </body>
    </html>
  );
}
