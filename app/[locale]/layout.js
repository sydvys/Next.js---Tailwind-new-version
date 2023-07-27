import "./globals.css";
import { Inter } from "next/font/google";
import { useLocale } from "next-intl";
import Header from "./Header/page";
import Footer from "./Footer/page";
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';



// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'az'}];
}

export default async function RootLayout({ children,  params: {locale} }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />{" "}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
