import type { Metadata } from "next";
import Navbar from "@/app/components/admin/Navbar";

export const metadata: Metadata = {
  title: "WeBuildIt",
  description: "Admin Dashboard",
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
    <div style={{ padding: 20 }}>
      <Navbar />
      <div>
        {children}
      </div>
    </div>
  );
}
