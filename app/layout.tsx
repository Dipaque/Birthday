import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figTree = Figtree({
  variable:"--font-figtree",
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: "Happy Birthday",
  description: "Wishing you very happy birthday",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figTree.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
