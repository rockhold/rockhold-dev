export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-500 py-4">
      © {new Date().getFullYear()} Brandon Rockhold · Built with React +
      TailwindCSS · Deployed on Vercel
    </footer>
  );
}
