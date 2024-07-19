import "./globals.css";
import Topo from "@/components/Topo";

export const metadata = {
  title: "Projeto 16 - Barbearia",
  description: "Projeto DevMedia",
  keywords: "Projeto, DevMedia, react, barbearia",
  author: "Robson Junior",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body >
        <Topo />
        
        {children}
      </body>
    </html>
  );
}
