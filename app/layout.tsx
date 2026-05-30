import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import PageTransition from "./components/PageTransition";
import { LanguageProvider } from "./i18n/LanguageProvider";

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-zen-kaku",
});

export const metadata: Metadata = {
  title: "ぴよナビ | 松ヶ崎祭 出展団体用ポータル",
  description: "松ヶ崎祭における出展者向けのポータルサイトです。",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/imgs/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={zenKaku.variable}>
      <body>
        <LanguageProvider>
          <PageTransition>{children}</PageTransition>
        </LanguageProvider>
      </body>
    </html>
  );
}
