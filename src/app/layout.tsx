import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sismica.eng.br"),
  title: {
    default: "Sismica Engenharia e Mineração",
    template: "%s | Sismica Engenharia e Mineração",
  },
  description:
    "Monitoramento sísmico, assessoria técnica e otimização de desmonte de rochas para mineração e construção civil. CREA-RS 198300.",
  keywords: [
    "monitoramento sísmico",
    "vibração detonação",
    "desmonte de rochas",
    "sismógrafo engenharia",
    "ABNT NBR 9653",
    "laudo ambiental DNPM",
    "pedreira RS",
  ],
  authors: [{ name: "Sismica Engenharia e Mineração Ltda." }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Sismica Engenharia e Mineração",
    title: "Sismica Engenharia e Mineração",
    description:
      "Segurança e precisão em cada detonação. Monitoramento sísmico, engenharia de explosivos e assessoria técnica.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
