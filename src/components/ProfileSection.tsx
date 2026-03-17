import { useRef } from 'react';
import type { ContentLocale } from '../types';
import { FiCheckCircle, FiDatabase, FiGlobe, FiMonitor, FiServer, FiTool } from 'react-icons/fi';
import {
  SiDocker,
  SiExpress,
  SiGithub,
  SiGithubactions,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNetlify,
  SiNodedotjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from 'react-icons/si';
import profilePhoto from '../img/Profile.jpg';

interface ProfileSectionProps {
  t: ContentLocale;
  isVisible: boolean;
}

export default function ProfileSection({ t, isVisible }: ProfileSectionProps) {
  if (!isVisible) return null;

  const assetBase = import.meta.env.BASE_URL ?? '/';
  const cvHref = `${assetBase}cv.pdf`;
  const certListRef = useRef<HTMLDivElement | null>(null);
  const heroName = t.overview.hero.nameLine.replace(/^I'm\s+/i, '').replace(/^Soy\s+/i, '');
  const skillIcons = [FiMonitor, FiServer, FiDatabase, FiTool];
  const skillToneClasses = ['skill-tone-frontend', 'skill-tone-backend', 'skill-tone-data', 'skill-tone-quality'];
  const toolIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    react: SiReact,
    nextjs: SiNextdotjs,
    typescript: SiTypescript,
    tailwindcss: SiTailwindcss,
    vite: SiVite,
    nodejs: SiNodedotjs,
    express: SiExpress,
    nestjs: SiNestjs,
    restapis: FiGlobe,
    apisrest: FiGlobe,
    socketio: SiSocketdotio,
    postgresql: SiPostgresql,
    prisma: SiPrisma,
    mongodb: SiMongodb,
    mysql: SiMysql,
    supabase: SiSupabase,
    github: SiGithub,
    githubactions: SiGithubactions,
    docker: SiDocker,
    vercelnetlify: SiVercel,
    vercel: SiVercel,
    netlify: SiNetlify,
    testingdiscipline: FiCheckCircle,
    disciplinadetesting: FiCheckCircle,
  };
  const certificateItems = t.profile.programs.flatMap((group) =>
    (group.certificates ?? []).map((cert) => ({
      label: cert.label,
      href: cert.href,
      group: group.title,
    })),
  );
  const programEntries = t.profile.programs
    .filter((program) => {
      const hasEnrollmentItem = program.items.some((item) => {
        const lowerItem = item.toLowerCase();
        return lowerItem.includes('enrollment') || lowerItem.includes('constancia');
      });
      const isTechnologist = program.title.toLowerCase().includes('sena') && hasEnrollmentItem;
      return !isTechnologist;
    })
    .map((program) => ({
      title: program.title,
      institution: program.subtitle ?? '',
      period: program.title,
      note: program.items.join(' · '),
    }));
  const educationEntries = [...t.profile.education, ...programEntries];

  const handleCertNav = (direction: number) => {
    const list = certListRef.current;
    if (!list) return;
    const item = list.querySelector<HTMLElement>('.profile-cert-item');
    const step = item ? item.offsetHeight + 12 : 120;
    list.scrollBy({ top: step * direction, behavior: 'smooth' });
  };

  const getToolIcon = (label: string) => {
    const normalized = label.toLowerCase().replace(/[^a-z0-9]+/g, '');
    return toolIconMap[normalized] ?? FiCheckCircle;
  };

  return (
    <section className="profile-section profile-section-modern border border-line/20 rounded-md p-5 md:p-6 animate-panel-in section-rhythm-light">
      <header className="profile-head profile-modern-head">
        <div className="flex items-center gap-3">
          <div className="profile-title-orb" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" className="profile-title-icon" aria-hidden="true">
              <path d="M3 9.5L12 5l9 4.5-9 4.5L3 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M6.5 12.5v3.2c0 .9 2.5 2.3 5.5 2.3s5.5-1.4 5.5-2.3v-3.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M21 9.5v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="profile-title-stack">
            <h2 className="section-title-emphasis m-0 text-[1.15rem] font-semibold tracking-[-0.01em] text-ink">{t.profile.title}</h2>
          </div>
        </div>
      </header>

      <article className="profile-hero-card">
        <div className="profile-hero-avatar">
          <img src={profilePhoto} alt={heroName} className="profile-hero-avatar-img" loading="lazy" />
        </div>
        <div className="profile-hero-body">
          <h3 className="profile-hero-name m-0">{heroName}</h3>
          <div className="profile-hero-badges">
            <span className="profile-hero-role">{t.role}</span>
          </div>
          <p className="profile-hero-summary m-0">{t.profile.summary}</p>
          <div className="profile-actions profile-hero-actions flex flex-wrap items-center gap-2">
            <a className="profile-download" href={cvHref} download>
              {t.profile.cvLabel}
            </a>
          </div>
        </div>
      </article>

      <div className="profile-modern-grid">
        <article className="profile-card profile-skills-card profile-skills-expanded profile-key-skills">
          <div className="profile-card-head">
            <h3 className="profile-card-title m-0 text-[0.78rem] font-mono tracking-[0.1em] uppercase text-signal-cyan">{t.profile.skills.title}</h3>
          </div>
          <div className="profile-skill-grid mt-4">
            {t.stack.items.map((item, index) => {
              const Icon = skillIcons[index % skillIcons.length];
              const toneClass = skillToneClasses[index % skillToneClasses.length];
              return (
                <article key={item.area} className={`profile-skill-card ${toneClass}`}>
                  <div className="profile-skill-head">
                    <span className="profile-skill-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <h4 className="profile-skill-title m-0">{item.area}</h4>
                  </div>
                  <div className="profile-skill-pills">
                    {item.tools.map((tool) => (
                      <span key={tool} className="profile-skill-pill">
                        {(() => {
                          const ToolIcon = getToolIcon(tool);
                          return <ToolIcon className="profile-skill-pill-icon" />;
                        })()}
                        {tool}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </article>

        <article className="profile-card profile-delivery-card">
          <div className="profile-card-head">
            <h3 className="profile-card-title m-0 text-[0.78rem] font-mono tracking-[0.1em] uppercase text-signal-cyan">{t.profile.deliverySignals.title}</h3>
          </div>
          <div className="profile-skill-grid mt-4">
            {t.profile.deliverySignals.items.map((item, index) => {
              const Icon = skillIcons[index % skillIcons.length];
              const toneClass = skillToneClasses[index % skillToneClasses.length];
              const isFullWidth = t.profile.deliverySignals.items.length % 2 === 1
                && index === t.profile.deliverySignals.items.length - 1;
              return (
                <article
                  key={item.area}
                  className={`profile-skill-card profile-delivery-signal ${toneClass} ${isFullWidth ? 'is-full' : ''}`}
                >
                  <div className="profile-skill-head">
                    <span className="profile-skill-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <h4 className="profile-skill-title m-0">{item.area}</h4>
                  </div>
                  <div className="profile-skill-pills">
                    {item.tools.map((tool) => (
                      <span key={tool} className="profile-skill-pill profile-delivery-pill">
                        <svg viewBox="0 0 16 16" aria-hidden="true" className="profile-delivery-pill-icon">
                          <path d="M3.5 8.3l2.3 2.3 6.7-6.7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {tool}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </article>

        <div className="profile-education-grid">
          {educationEntries.length ? (
            <article className="profile-card profile-education-card">
              <div className="profile-card-head">
                <h3 className="profile-card-title m-0 text-[0.78rem] font-mono tracking-[0.1em] uppercase text-signal-cyan">{t.profile.statusLabel}</h3>
              </div>
              <div className="profile-education-stack">
                {educationEntries.map((entry) => (
                  <div key={entry.title} className="profile-entry profile-entry-timeline">
                    <div className="profile-entry-head">
                      <h4 className="profile-entry-title m-0">{entry.title}</h4>
                      {entry.period ? <span className="profile-entry-period">{entry.period}</span> : null}
                    </div>
                    <p className="profile-entry-meta m-0 text-[0.8rem] text-ink-3">{entry.institution}</p>
                    {entry.note ? <p className="profile-entry-note m-0 text-[0.78rem] text-ink-2">{entry.note}</p> : null}
                  </div>
                ))}
              </div>
            </article>
          ) : null}

          {certificateItems.length ? (
            <article className="profile-card profile-certificates-card">
              <div className="profile-card-head">
                <h3 className="profile-card-title m-0 text-[0.78rem] font-mono tracking-[0.1em] uppercase text-signal-cyan">{t.profile.certificatesLabel}</h3>
                <div className="profile-cert-nav">
                  <button type="button" className="profile-cert-nav-btn" aria-label="Scroll certificates up" onClick={() => handleCertNav(-1)}>
                    <svg viewBox="0 0 20 20" aria-hidden="true" className="profile-cert-nav-icon">
                      <path d="M5 12l5-5 5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button type="button" className="profile-cert-nav-btn" aria-label="Scroll certificates down" onClick={() => handleCertNav(1)}>
                    <svg viewBox="0 0 20 20" aria-hidden="true" className="profile-cert-nav-icon">
                      <path d="M5 8l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="profile-cert-list" ref={certListRef}>
                {certificateItems.map((cert) => (
                  <a key={cert.label} className="profile-cert-item" href={cert.href} download>
                    <div>
                      <span className="profile-cert-title">{cert.label}</span>
                      <span className="profile-cert-meta">{cert.group}</span>
                    </div>
                    <span className="profile-cert-tag">PDF</span>
                  </a>
                ))}
              </div>
            </article>
          ) : null}
        </div>
      </div>
    </section>
  );
}
