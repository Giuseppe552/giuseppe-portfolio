// SectionTitle server component for reuse
export default function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div>
      <p className="font-mono text-indigo-400">{kicker}</p>
      <h2 className="text-2xl md:text-3xl font-semibold mt-2">{title}</h2>
    </div>
  );
}
