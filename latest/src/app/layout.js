import { Be_Vietnam_Pro, DM_Mono } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bevietnampro",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dmmono",
});

export const metadata = {
  title: "Nicholas Victorio",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${beVietnamPro.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
