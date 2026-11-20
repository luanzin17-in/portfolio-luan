import { Bricolage_Grotesque, Figtree } from "next/font/google";
import Nav from "../components/Nav";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Figtree({ subsets: ["latin"], variable: "--font-body" });

export const metadata = { title: "Luan Luna · Currículo e portfólio", description: "Estudante de Sistemas para Internet no Recife." };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <footer className="foot">Luan Rhikelmy Falcão de França Luna · Recife, PE</footer>
      </body>
    </html>
  );
}
