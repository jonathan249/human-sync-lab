import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const sans = Archivo({
  variable: "--font-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Human Sync Lab",
  description: "A playground for human-AI interaction experiments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
