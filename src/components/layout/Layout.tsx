import { type ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-950 text-gray-100">
      <Header />
      <main className="flex-grow px-4 sm:px-6 md:px-8 max-w-3xl w-full mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
}
