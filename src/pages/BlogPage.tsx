import { useEffect } from "react";

export default function BlogPage() {
  useEffect(() => {
    document.title = "Blog – rockhold.dev";
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-zinc-200 animate-fadeIn">
      <h1 className="text-3xl font-bold text-sky-400 mb-6">Blog</h1>
      <p className="mt-2">
        This page and the content contained within is currently under
        construction. I intend to put some recent thoughts to digital paper on
        the topics of leadership, engineering management, collaboration,
        organizational alignment and more!
      </p>
    </div>
  );
}
