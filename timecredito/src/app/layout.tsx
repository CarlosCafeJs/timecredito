import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "TIME Promotora de Crédito | Crédito Consignado e Soluções Financeiras",
  description: "Especialistas em crédito consignado para aposentados, servidores, militares e pensionistas. Atendimento humanizado, taxas reduzidas e liberação rápida com a TIME Promotora de Crédito.",
  keywords: [
    "crédito consignado",
    "empréstimo consignado",
    "TIME Promotora de Crédito",
    "crédito para aposentado",
    "crédito para militar",
    "crédito para servidor público",
    "portabilidade de empréstimo",
    "empréstimo INSS",
    "promotora de crédito confiável"
  ],
  authors: [{ name: "TIME Promotora de Crédito" }],
  creator: "TIME Promotora de Crédito",
  robots: "index, follow",
  openGraph: {
    title: "TIME Promotora de Crédito",
    description: "Crédito fácil, rápido e com quem joga no seu time. Consulte as melhores condições para consignado, portabilidade e refinanciamento.",
    url: "https://www.timecredito.com.br",
    siteName: "TIME Promotora de Crédito",
    locale: "pt_BR",
    type: "website",
  },
  metadataBase: new URL("https://www.timecredito.com.br"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="bg-[#E8824A]">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
