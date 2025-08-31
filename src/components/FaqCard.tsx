type FaqCardProps = {
  q: string;
  a: string;
};

export default function FaqCard({ q, a }: FaqCardProps) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg">
      <h4 className="text-base sm:text-lg font-bold">{q}</h4>
      <p className="mt-2 text-sm text-gray-300">{a}</p>
    </div>
  );
}
