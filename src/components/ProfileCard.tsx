type ProfileCardProps = {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  showBadge?: boolean;
  badgeText?: string;
  showResume?: boolean;
};

export default function ProfileCard({
  name,
  title,
  description,
  imageUrl,
  showBadge = false,
  badgeText = "Actively Seeking",
  showResume = false,
}: ProfileCardProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-gray-800 p-6 rounded-xl shadow-lg ring-1 ring-gray-700">
      <div className="relative shrink-0">
        <img
          src={imageUrl}
          alt={`${name} profile`}
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-gray-700 object-cover"
        />
        {showBadge && (
          <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-full shadow-md border border-gray-900">
            {badgeText}
          </div>
        )}
      </div>

      <div className="flex flex-col text-center sm:text-left w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">{name}</h1>
        <h2 className="text-lg text-sky-400 mt-1">{title}</h2>
        <p className="text-gray-300 mt-2 max-w-prose mx-auto sm:mx-0">
          {description}
        </p>

        {showResume && (
          <div className="mt-4 sm:self-end">
            <a
              href="/resume"
              className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-full shadow transition text-sm"
            >
              View My Resume
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
