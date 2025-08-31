type CtaCardProps = {
  title?: string;
  description?: string;
  button?: { href: string; label: string };
  children?: React.ReactNode;
};

export default function CtaCard({
  title,
  description,
  button,
  children,
}: CtaCardProps) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg">
      {title ? (
        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center">
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className="text-gray-300 text-center max-w-3xl mx-auto">
          {description}
        </p>
      ) : null}
      {children}
      {button ? (
        <div className="mt-5 flex items-center justify-center">
          <a
            href={button.href}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {button.label}
          </a>
        </div>
      ) : null}
    </div>
  );
}
