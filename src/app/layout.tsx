import type { Metadata } from 'next';
import './globals.css';
import './reset.css';

export const metadata: Metadata = {
  title: 'amazing billion',
  description: 'amazing billion',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="main">
        <h1 className="title">세상에서 가장 돈이 많은 사람 TOP 400</h1>
        {children}
      </body>
    </html>
  );
}
