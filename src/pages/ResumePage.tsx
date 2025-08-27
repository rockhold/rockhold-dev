import { useEffect } from "react";

export default function ResumePage() {
  useEffect(() => {
    document.title = "Resume – rockhold.dev";
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-zinc-200 animate-fadeIn text-center">
      <div className="flex flex-col items-center space-y-6">
        {/* Resume SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20 text-sky-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V4a2 2 0 012-2h6l6 6v14a2 2 0 01-2 2z"
          />
        </svg>

        <h1 className="text-3xl font-bold text-sky-400">My Resume</h1>

        <p className="text-zinc-400 max-w-prose">
          A more interactive experience is coming soon. In the meantime, you can
          download the latest version of my resume below.
        </p>

        <a
          href="https://drive.google.com/uc?export=download&id=1tivUVueOzcrT-WN31qebP38ESJr9BE7-"
          className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-full shadow transition"
        >
          <span>Download Resume</span>

          {/* Download arrow SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
