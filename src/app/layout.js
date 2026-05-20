import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Scroll from "@/components/minor/Scroll";
import ThemeController from "@/components/minor/ThemeController";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tuition Terminal",
  description: "Best place to find tutors in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-linear-to-r from-[#DDF3FE] via-[#D4FFF0] to-[#DDF3FE]">
        {children}
        <ThemeController />
        <Scroll />
        <Toaster  position="bottom-right" />
        </body>
    </html>
  );
}
