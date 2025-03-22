import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const roboto = localFont({
  src: "./fonts/Roboto-Regular.ttf",
  variable: "--font-roboto",
  weight: '500',
});
const robotoThin = localFont({
  src: "./fonts/Roboto-Thin.ttf",
  variable: "--font-robotoThin"
});
const robotoLight = localFont({
  src: "./fonts/Roboto-Light.ttf",
  variable: "--font-robotoLight"
});
const robotoMedium = localFont({
  src: "./fonts/Roboto-Medium.ttf",
  variable: "--font-robotoMedium"
});
const robotoBold = localFont({
  src: "./fonts/Roboto-Bold.ttf",
  variable: "--font-robotoBold"
});
const interMedium = localFont({
  src: "./fonts/Inter-Medium.ttf",
  variable: "--font-interMedium"
});
const inter = localFont({
  src: "./fonts/Inter-VariableFont.ttf",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "YAMAZAKURA",
  description: "Yamazakura Blog",
};

export default function RootLayout({ children } : 
  Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${robotoBold.variable}
        ${robotoThin.variable} ${robotoLight.variable} ${robotoMedium.variable}
        ${interMedium.variable} ${inter.variable}
      `}>
        {children}
      </body>
    </html>
  );
}
