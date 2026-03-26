import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'; // Importação da biblioteca

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rafael Piscinas | Construção e Reforma em Porto Velho",
  description: "Especialista em piscinas de alvenaria, iluminação LED e projetos personalizados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        {/* O Google Analytics só vai funcionar se o seu .env.local estiver com o ID certo */}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
      </body>
    </html>
  );
}