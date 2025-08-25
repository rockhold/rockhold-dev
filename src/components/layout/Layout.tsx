import { type ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-900">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
