import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { Toaster } from "@/components/ui/toaster";
import { ApolloWrapper } from "@/lib/apollo-wrapper";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WeirdThoughts",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ApolloWrapper>
          <ThemeProvider attribute="class" defaultTheme="class" enableSystem>
            <Toaster />
            <Navbar />

            <div className="min-h-[80vh]">{children}</div>
            <Footer />
          </ThemeProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
