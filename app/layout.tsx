import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactLenis } from "@/utils/lenis";
import { WindowSizeProvider } from "./providers";
const BasisGrotesquePro = localFont({
  src: [
    {
      path: "./fonts/BasisGrotesquePro-Light.woff2",
      weight: "300",
    },
    { path: "./fonts/BasisGrotesquePro-Regular.woff2", weight: "400" },
    { path: "./fonts/BasisGrotesquePro-Medium.woff2", weight: "500" },
  ],
  variable: "--font-grotesque",
});

export const metadata: Metadata = {
  title: "Daily Life Navigators | Psychological Services",
  description:
    "Healing is Possible. Growth is Within Reach. Providing consistent and effective assessments that guide our preventive and curative psychotherapy services.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={`${BasisGrotesquePro.variable} overflow-x-clip antialiased selection:bg-[#c9a227] selection:text-[#0d1117]`}
        >
          <WindowSizeProvider>{children}</WindowSizeProvider>
        </body>
      </ReactLenis>
    </html>
  );
}
