import { Sora, Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { ModalProvider } from "@/components/providers/ModalProvider";
import RdvModal from "@/components/modals/RdvModal";
import DevisModal from "@/components/modals/DevisModal";
import ScrollToTop from "@/components/ui/ScrollToTop";
import TarifsModal from "@/components/modals/TarifsModal";

const sora = Sora({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-sora" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter" });
const fraunces = Fraunces({ subsets: ["latin"], weight: ["400"], style: ["italic"], variable: "--font-fraunces" });

export const metadata = {
  title: "Blinks Global Business - Conseil, Croissance, Excellence",
  description: "Cabinet international de conseil en transformation digitale.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${sora.variable} ${inter.variable} ${fraunces.variable}`}>
        <ModalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingButtons />
          <ScrollToTop/>
          <RdvModal />
          <DevisModal />
          <TarifsModal />
          </ModalProvider>
      </body>
    </html>
  );
}