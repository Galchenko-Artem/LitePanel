import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";

export const metadata = {
  title: "React UI Playground",
  description: "Форма, таблица, модалка",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen">
        <nav className="bg-gray-800 text-white px-6 py-4 flex gap-4">
          <Link href="/">Главная</Link>
          <Link href="/form">Форма</Link>
          <Link href="/table">Таблица</Link>
          <Link href="/modal">Модалка</Link>
        </nav>
        <main className="max-w-3xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
