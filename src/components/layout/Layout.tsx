import { type ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-900">
      <Header />
      <main className="flex-grow px-4 py-8 max-w-4xl mx-auto w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
