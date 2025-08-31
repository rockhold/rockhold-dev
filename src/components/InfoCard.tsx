type InfoCardProps = {
  title: string;
  children: React.ReactNode;
};

export default function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg">
      <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
      <div className="text-gray-200 text-sm">{children}</div>
    </div>
  );
}
