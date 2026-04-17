import "./globals.css";
import { Amiri, Noto_Naskh_Arabic } from "next/font/google";
import { SettingsProvider } from "@/src/context/SettingsContext";

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

const naskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-naskh",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${amiri.variable} ${naskh.variable}`}>
      <body className="bg-gray-50 text-gray-900">
        <SettingsProvider>{children}</SettingsProvider>
      </body>
    </html>
  );
}