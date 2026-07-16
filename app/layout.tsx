import type { Metadata } from 'next';
import { Assistant } from 'next/font/google';
import './globals.scss';

const assistant = Assistant({
  subsets: ['hebrew', 'latin'],
  weight: 'variable',
  variable: '--font-assistant',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://oz-platform.example.com'),
  title: 'עוז — פתרונות הלנה לעובדים',
  description: 'אכסניות מאובזרות לעובדים זרים בפריסה ארצית, להזמנות קצרות טווח עם תהליך פשוט ומהיר',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={assistant.variable}>
      <body>{children}</body>
    </html>
  );
}
