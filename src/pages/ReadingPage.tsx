import { useEffect } from "react";

export default function ReadingPage() {
  useEffect(() => {
    document.title = "Reading – rockhold.dev";
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-zinc-200 animate-fadeIn">
      <h1 className="text-3xl font-bold text-sky-400 mb-6">Reading</h1>
      <p className="mt-2">
        This page will host my recommended reading list, along with some
        thoughts about each title.
      </p>
    </div>
  );
}
