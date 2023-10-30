import StyledComponentsRegistry from "@/lib/registery";
import "@fontsource/lato";
import { GlobalStyles } from "./styles";
import Footer from "@/component/ui/Footer/Footer";
import Navbar from "@/component/ui/Navbar/Navbar";
// import { assets } from "@/public/assets";
import { Metadata } from "next";
import Providers from "@/utils/Providers";
import { assets } from "@/public/assets";

export const metadata: Metadata = {
  title: {
    default: "Dibo Ruwa",
    template: "%s | Dibo Ruwa",
  },
  description: "DiboRuwa - One-Stop App for Home Services | Food | Laundry | Cleaning",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://",
    // site_name: "D",
  },
};

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Providers>
          <Navbar />
          {authModal}

          <main>{children}</main>

          <Footer />
          <GlobalStyles />
        </Providers>
      </body>
    </html>
  );
}
