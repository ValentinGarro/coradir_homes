import type { Metadata } from "next"; 
import "./globals.css";
 

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
      <body className="bg-gray">
        {children}
      </body>
    </html>
  );
}
