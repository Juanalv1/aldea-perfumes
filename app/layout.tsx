import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aldea de Perfumes | Perfume, Expresión de tu esencia",
  description: "Perfumes 100% originales con envío a todo el país. Descubre nuestra exclusiva colección de fragancias de las mejores marcas: Chanel, Dior, YSL, Tom Ford y más.",
  keywords: "perfumes originales, fragancias, Aldea de Perfumes, Chanel, Dior, YSL, Tom Ford, perfumes para mujer, perfumes para hombre",
  authors: [{ name: "Aldea de Perfumes" }],
  openGraph: {
    title: "Aldea de Perfumes | Perfume, Expresión de tu esencia",
    description: "Perfumes 100% originales con envío a todo el país. Descubre nuestra exclusiva colección de fragancias.",
    type: "website",
    locale: "es_CO",
    siteName: "Aldea de Perfumes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aldea de Perfumes | Perfume, Expresión de tu esencia",
    description: "Perfumes 100% originales con envío a todo el país.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${montserrat.variable} antialiased`}>
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toast />
        </CartProvider>
      </body>
    </html>
  );
}
