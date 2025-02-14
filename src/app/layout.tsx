import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Load Plus Jakarta Sans font
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Add desired font weights
});

export const metadata: Metadata = {
  title: "StudioTwoFour",
  description: "Creative Technolab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className=" bg-[rgb(17,5,1)] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
