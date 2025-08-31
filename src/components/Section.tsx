type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`max-w-4xl mx-auto w-full px-4 ${className}`.trim()}>
      {children}
    </section>
  );
}
