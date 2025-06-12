import type { Metadata } from "next"; 
import "./globals.css";
import Header from "./components/header/header"; 
import Footer from "./components/footer/footer";
import Bot from "./components/bot";

export const metadata: Metadata = {
  title: "Coradir Homes",
  description: "Coradir Homes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-white overflow-x-hidden">
        <Header/>   
        <Bot/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
