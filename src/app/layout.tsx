import "./globals.css";
import { ReactNode } from "react";
import NavTabs from "@/components/NavTabs";

export const metadata = {
  title: "React UI Playground",
  description: "Форма, таблица, модалка",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-gray-100">
        <div className="max-w-4xl mx-auto pt-6">
          <NavTabs />
          <div className="bg-white border border-t-0 border-gray-300 rounded-b-md p-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
