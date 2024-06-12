import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NextAuth-V5 Authentication",
  description: "Created by Trae Zeeofor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark max-w-3xl mx-auto text-2xl">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
