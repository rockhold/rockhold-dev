import { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact – rockhold.dev";
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-zinc-200 animate-fadeIn">
      <h1 className="text-3xl font-bold text-sky-400 mb-6">Let’s Connect</h1>

      <p className="mb-6 text-gray-300">
        Whether you’d like to collaborate, discuss an opportunity, or just say
        hi, I’d love to hear from you.
      </p>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-10">
        <h2 className="text-xl font-semibold mb-2">📬 Email Me</h2>
        <a
          href="mailto:brandon@rockhold.dev"
          className="text-sky-400 underline hover:text-sky-300 text-lg"
        >
          brandon@rockhold.dev
        </a>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <FaGithub className="text-2xl text-zinc-400 hover:text-white transition" />
          <a
            href="https://github.com/rockhold"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white text-lg transition"
          >
            github.com/rockhold
          </a>
        </div>

        <div className="flex items-center gap-4">
          <FaLinkedin className="text-2xl text-zinc-400 hover:text-white transition" />
          <a
            href="https://linkedin.com/in/brandon-rockhold"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white text-lg transition"
          >
            linkedin.com/in/brandon-rockhold
          </a>
        </div>
      </div>
    </div>
  );
}
