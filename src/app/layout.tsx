import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/components/fonts";

export const metadata: Metadata = {
  title: "Odyssey CV",
  description:
    "Create professional, customized resumes effortlessly with Odyssey CV. Build, edit, and download your perfect CV in minutes with easy-to-use templates designed to impress employers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
