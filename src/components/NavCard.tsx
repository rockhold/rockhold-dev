import { clsx } from "clsx";
import { Link } from "react-router-dom";

type NavCardProps = {
  title: string;
  description: string;
  href: string;
  className?: string;
};

export default function NavCard({
  title,
  description,
  href,
  className,
}: NavCardProps) {
  return (
    <Link
      key={href}
      to={href}
      className={clsx(
        "group bg-gray-800 hover:bg-gray-700 transition rounded-lg p-6 border border-gray-700",
        className
      )}
    >
      <h3 className="text-xl font-medium mb-2 group-hover:text-yellow-400 transition">
        {title}
      </h3>
      <p className="text-gray-400 group-hover:text-gray-200 transition">
        {description}
      </p>
    </Link>
  );
}
