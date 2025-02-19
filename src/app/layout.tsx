import type { Metadata } from "next";
import { Noto_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

// Google Fonts設定
const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-noto-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aigis | 公式ホームページ",
  description:
    "Aigisのカウンセリングは、「優しく癒す」でも「心が疲れた時のお悩み相談」でもありません。科学的手法を基に、勇気と覚悟を持って自身のSolitudeと潜在能力 にアプローチし、人生を変容させるものです。この意識へのアプローチを軸に、さらに身体、食事などのサポートも取り入れ、全方向からオーダーメイドで、あなたを最高の状態にするものです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSans.variable} ${playfairDisplay.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
