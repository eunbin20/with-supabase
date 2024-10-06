import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className="min-h-screen flex flex-col items-center w-full bg-sand"
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
