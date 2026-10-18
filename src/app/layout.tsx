import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "타이쿤 | 링크나무",
  description: "타이쿤의 링크 모음",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
