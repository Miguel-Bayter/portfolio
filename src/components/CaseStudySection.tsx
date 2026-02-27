import type { ContentLocale } from '../types';

interface CaseStudySectionProps {
  t: ContentLocale;
  isVisible: boolean;
}

export default function CaseStudySection({ t, isVisible }: CaseStudySectionProps) {
  if (!isVisible) return null;

  return (
    <section className="border border-line/20 rounded-md p-5 md:p-6 animate-panel-in bg-surface-2/75 section-rhythm-light">
      <header className="pb-5 mb-5 border-b border-line/10">
        <h2 className="section-title-emphasis m-0 text-[1.15rem] font-semibold tracking-[-0.01em] text-ink">{t.caseStudy.title}</h2>
        <p className="mt-2 mb-0 text-ink-2 text-[0.88rem] leading-[1.55]">{t.caseStudy.subtitle}</p>
      </header>

      <div className="case-signals-grid grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        {t.caseStudy.signals.map((signal) => (
          <article key={signal.label} className="insight-signal-card case-signal-premium border border-line/20 rounded-sm p-4 bg-surface-4">
            <p className="case-signal-label m-0 text-ink-3 text-[0.72rem] font-mono tracking-[0.07em] uppercase">{signal.label}</p>
            <strong className="block mt-2 text-ink text-[1rem] font-semibold tracking-[-0.01em]">{signal.value}</strong>
            <p className="case-signal-note mt-2 mb-0 text-ink-2 text-[0.82rem] leading-[1.55]">{signal.note}</p>
          </article>
        ))}
      </div>

      <div className="case-panels-grid mt-5 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-3 md:gap-4">
        {t.caseStudy.panels.map((panel) => (
          <article key={panel.title} className="insight-panel-card case-panel-premium border border-line/20 rounded-sm p-4 bg-surface-4">
            <h3 className="case-panel-title m-0 text-[0.8rem] font-mono tracking-[0.08em] uppercase text-signal-coral">{panel.title}</h3>
            <ul className="case-panel-list mt-3 mb-0 p-0 list-none grid gap-2">
              {panel.bullets.map((bullet) => (
                <li key={bullet} className="hiring-li pl-4 text-ink-2 text-[0.84rem] leading-[1.55] relative">
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
