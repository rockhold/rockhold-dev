export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-lg font-bold tracking-wide">rockhold.dev</h1>
        <nav className="space-x-4 text-sm">
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/resume" className="hover:underline">
            Resume
          </a>
          <a href="/blog" className="hover:underline">
            Blog
          </a>
          <a href="/reading" className="hover:underline">
            Reading
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
