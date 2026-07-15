export default function KpiBand({ items }) {
  const loop = [...items, ...items];

  return (
    <section className="bg-primary overflow-hidden py-4">
      <div className="flex whitespace-nowrap animate-scroll-kpi w-max">
        {loop.map((kpi, i) => (
          <div key={i} className="flex items-center gap-2 px-8 shrink-0">
            <span className="font-heading font-bold text-xl text-accent">
              {kpi.value}
            </span>
            <span className="font-body text-xs text-white/80 uppercase tracking-wide">
              {kpi.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}