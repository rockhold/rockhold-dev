import { FiHelpCircle, FiMessageCircle } from "react-icons/fi";

type FaqCardProps = {
  q: string;
  a: string;
};

export default function FaqCard({ q, a }: FaqCardProps) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg space-y-4">
      {/* Question row */}
      <div className="flex items-center gap-3">
        <FiHelpCircle className="text-blue-400 flex-none h-5 w-5" />
        <h4 className="text-base sm:text-lg font-bold leading-snug">{q}</h4>
      </div>

      {/* Answer row */}
      <div className="flex items-start gap-3">
        <FiMessageCircle className="text-green-400 flex-none h-5 w-5 mt-0.5" />
        <p className="text-sm text-gray-300 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}
