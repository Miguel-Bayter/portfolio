import type { ContentLocale } from '../types';

interface StackSectionProps {
  t: ContentLocale;
  isVisible: boolean;
}

export default function StackSection({ t, isVisible }: StackSectionProps) {
  if (!isVisible) return null;

  return (
    <section className="border border-line/20 rounded-md p-5 md:p-6 animate-panel-in bg-gradient-to-b from-surface-4/45 to-surface-2/78 section-rhythm-light">
      <header className="pb-5 mb-5 border-b border-line/10">
        <h2 className="section-title-emphasis m-0 text-[1.15rem] font-semibold tracking-[-0.01em] text-ink">{t.stack.title}</h2>
        <p className="mt-2 mb-0 text-ink-2 text-[0.88rem] leading-[1.55]">{t.stack.subtitle}</p>
      </header>

      <div className="stack-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 md:gap-4">
        {t.stack.items.map((item) => (
          <article key={item.area} className="capability-card stack-card-premium border border-line/20 [border-top:2px_solid_rgba(158,193,213,0.35)] rounded-sm p-4 bg-surface-4">
            <h3 className="stack-card-title m-0 text-[0.84rem] font-semibold tracking-[0.04em] uppercase text-ink-2 font-mono">{item.area}</h3>
            <p className="stack-card-note mt-2 mb-0 text-ink-3 text-[0.78rem] leading-[1.55]">{item.criterion}</p>
            <ul className="stack-card-tools mt-3 mb-0 p-0 list-none grid gap-2">
              {item.tools.map((tool) => (
                <li key={tool} className="text-ink-2 text-[0.88rem] leading-[1.4] pl-4 relative stack-li">
                  {tool}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
