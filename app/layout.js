import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
});

export const metadata = {
  title:
    "Rhino Holidays - Roam the world, The Rhino way- from Northeast to the world!",
  description:
    "Explore breathtaking destinations like Sikkim and Darjeeling with Rhino Holidays. Curated tour packages, authentic experiences, and unforgettable adventures await.",
  keywords:
    "Himalayan travel, Sikkim tours, Darjeeling packages, adventure travel, premium holidays",
  generator: "v0.app",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4CAF50",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
