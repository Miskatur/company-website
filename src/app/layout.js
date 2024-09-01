
import { Archivo } from "next/font/google";
import 'react-modal-video/css/modal-video.css';
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.css';
import 'swiper/css/bundle';
import '../assets/css/validnavs.css';
// import '../assets/css/unit-test.css';
import '../assets/css/spacing.css'
import '../assets/css/flaticon-set.css'
import '../assets/css/style.css'
import Header from "@/components/shared/header/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from "react-toastify";
import StoreProvider from "@/provider/provider";
import Footer from "@/components/shared/footer/footer";

// const inter = Inter({ subsets: ["latin"] });
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
})
export const metadata = {
  title: "Axilsoft Limited",
  description: "Axilsoft Limited is one of the fastest growing digital technology platforms.",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  keywords: [

  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/logo/logo.svg" type="image/png" />
      </head>
      <body className={`${archivo.className}`}>
        <StoreProvider > 
          <Header />
          {children}
          <ToastContainer />
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
