import type { Metadata } from "next";
import { Geist, Geist_Mono, Birthstone, Poppins, Gwendolyn } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const birthstone = Birthstone({
  subsets: ["latin"],
  weight: "400", 
  variable: "--font-birthstone",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"],
    variable: "--font-poppins",
  });

  const gwendolyn = Gwendolyn({
    subsets: ["latin"],
    weight: ["400","700"], 
    variable: "--font-gwendolyn",
  });

export const metadata: Metadata = {
  title: "Invitación de boda - Angel & Alondra",
  description: "Te esperamos con gusto en nuestro día especial",
  icons: {
    icon: "ring.ico",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
