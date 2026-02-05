import type { Metadata } from "next";
import Navbar from "@/app/components/Admin/Navbar";
import Sidebar from "@/app/components/Admin/Sidebar"; // <-- import Sidebar

export const metadata: Metadata = {
  title: "WeBuildIt",
  description: "Admin Dashboard",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ flex: 1, padding: 20 }}>
          {children}
        </main>
      </div>
    </div>
  );
}