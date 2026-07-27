import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Sora, Inter, Fraunces } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { ModalProvider } from "@/components/providers/ModalProvider";
import RdvModal from "@/components/modals/RdvModal";
import DevisModal from "@/components/modals/DevisModal";
import TarifsModal from "@/components/modals/TarifsModal";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { routing } from "@/i18n/routing";

const sora = Sora({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-sora" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter" });
const fraunces = Fraunces({ subsets: ["latin"], weight: ["400"], style: ["italic"], variable: "--font-fraunces" });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata() {
  const t = await getTranslations("siteMeta");
  return { title: t("title"), description: t("description") };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${sora.variable} ${inter.variable} ${fraunces.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <ModalProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <FloatingButtons />
            <ScrollToTop />
            <RdvModal />
            <DevisModal />
            <TarifsModal />
          </ModalProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}