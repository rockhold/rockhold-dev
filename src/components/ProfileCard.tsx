import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { clsx } from "clsx";

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
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setShowPopup(false);
      }
    };
    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

  return (
    <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-gray-800 p-6 rounded-xl shadow-lg ring-1 ring-gray-700">
      <div className="relative shrink-0">
        <img
          src={imageUrl}
          alt={`${name} profile`}
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-gray-700 object-cover"
        />
        {showBadge && (
          <>
            <button
              onClick={() => setShowPopup((prev) => !prev)}
              className="absolute -bottom-2 -right-2 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-full shadow-md border border-gray-900
    focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2
    transition transform hover:scale-105 active:scale-95 cursor-pointer pulse-badge"
            >
              {badgeText}
            </button>

            {showPopup && (
              <div
                ref={popupRef}
                className={clsx(
                  "absolute z-50 mt-3 w-80 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg p-4 text-sm text-zinc-100 animate-fadeIn",
                  "left-1/2 top-full -translate-x-1/2"
                )}
              >
                <div className="flex justify-between items-start">
                  <strong className="text-yellow-300">My Next Chapter</strong>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="text-zinc-400 hover:text-zinc-100 text-xs cursor-pointer"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>
                <p className="mt-2 leading-relaxed text-zinc-300">
                  I’m looking for a remote engineering leadership role where I
                  can help an organization succeed and scale: operationally,
                  technically, culturally, and financially. I want to work on
                  products that matter, alongside people who care about each
                  other and the work they do.
                </p>
                <p className="mt-3">
                  Roles that may be a good fit for me include: Engineering
                  Manager, Sr Engineering Manager, and Engineering Director.
                </p>
                <p className="mt-3">
                  If you're aware of or are hiring for a role that you think I
                  may fit well,{" "}
                  <Link to="/contact" className="text-sky-400 underline">
                    let’s connect
                  </Link>
                  !
                </p>
              </div>
            )}
          </>
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
            <Link
              to="/resume"
              className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-full shadow transition text-sm"
            >
              View My Resume
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
