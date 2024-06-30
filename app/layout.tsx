import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "True Palestinian Story",
  description:
    "True Palestinian Story aims to create an accurate timeline with comprehensive resources aiming to create awareness and educate people of the reality and history of Palestine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-white text-black ${inter.className}`}>
        <Header />
        <main className="mx-auto w-full max-w-[800px] p-4 md:w-[90%]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
