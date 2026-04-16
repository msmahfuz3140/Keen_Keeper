import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/Header";
import ContextProvider from "@/Context/ContextProvider";
import Providers from "./lib/providers/Providers";
import { ToastContainer } from "react-toastify";
import Footer from "@/Components/Footer/Footer";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Keen Keeper",
  description: "Keen Keeper | your friend list",
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme='light'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <Header />
          <main className="flex-1 p-4">
            {children}
          </main>
          <Footer />
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
