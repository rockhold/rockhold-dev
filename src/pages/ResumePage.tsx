import { useEffect } from "react";

export default function ResumePage() {
  useEffect(() => {
    document.title = "Resume – rockhold.dev";
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-zinc-200 animate-fadeIn">
      <h1 className="text-3xl font-bold text-sky-400 mb-6">Resume</h1>
      <p className="mt-2">
        This page is currently under construction. I intend to have a web-view
        of my resume experience, as well as a downloadable PDF, available here
        soon.
      </p>
    </div>
  );
}
