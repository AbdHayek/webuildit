import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "We buildit",
  description: "Home Page",
  icons: {
    icon: "/favicon.ico", // supports png, ico, svg
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
        <Footer /> 
      </body>
    </html>
  );
}
