import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
variable: "--font-geist-sans",
subsets: ["latin"],
});

const geistMono = Geist_Mono({
variable: "--font-geist-mono",
subsets: ["latin"],
});

export const metadata: Metadata = {
title: "UMult Learning",
description: "Free Learning Materials, Internships, Jobs, and Career Resources",
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
<html
lang="en"
className={"${geistSans.variable} ${geistMono.variable} h-full antialiased"}
>
<body className="min-h-full flex flex-col">
{children}

    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-FF5NQMLJSL"
      strategy="afterInteractive"
    />

    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-FF5NQMLJSL');
      `}
    </Script>
  </body>
</html>

);
}