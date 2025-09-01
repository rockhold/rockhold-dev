type StepCardProps = {
  step: string;
  title: string;
  text: string;
  link?: { href: string; label: string };
};

export default function StepCard({ step, title, text, link }: StepCardProps) {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg border border-gray-700">
      <span className="block text-xs uppercase tracking-wide text-gray-400">
        {step}
      </span>
      <div className="mt-1 font-semibold">{title}</div>
      <p className="mt-1 text-sm text-gray-300">{text}</p>
      {link ? (
        <a
          href={link.href}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-2 inline-block text-blue-300 hover:text-blue-200 underline underline-offset-2"
        >
          {link.label}
        </a>
      ) : null}
    </div>
  );
}
