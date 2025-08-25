import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full p-4 bg-black text-white shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        <Link to="/">rockhold.dev</Link>
      </h1>
      <nav className="space-x-4 text-sm">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/resume" className="hover:underline">
          Resume
        </Link>
        <Link to="/blog" className="hover:underline">
          Blog
        </Link>
        <Link to="/reading" className="hover:underline">
          Reading
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
      </nav>
    </header>
  );
}
