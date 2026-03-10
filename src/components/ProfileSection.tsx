import type { ContentLocale } from '../types';

interface ProfileSectionProps {
  t: ContentLocale;
  isVisible: boolean;
}

export default function ProfileSection({ t, isVisible }: ProfileSectionProps) {
  if (!isVisible) return null;

  const hasCertificates = t.profile.programs.some((group) => group.certificates && group.certificates.length > 0);
  const [technologist] = t.profile.education;
  const [technicalProgram, courseProgram] = t.profile.programs;

  return (
    <section className="border border-line/20 rounded-md p-5 md:p-6 animate-panel-in bg-surface-2/75 section-rhythm-light">
      <header className="profile-head pb-4 mb-5 border-b border-line/10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="profile-title-orb" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" className="profile-title-icon" aria-hidden="true">
                <path d="M3 9.5L12 5l9 4.5-9 4.5L3 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M6.5 12.5v3.2c0 .9 2.5 2.3 5.5 2.3s5.5-1.4 5.5-2.3v-3.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M21 9.5v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h2 className="section-title-emphasis m-0 text-[1.15rem] font-semibold tracking-[-0.01em] text-ink">{t.profile.title}</h2>
            </div>
          </div>
          <div className="profile-actions flex flex-wrap items-center gap-2">
            <a className="profile-download" href="/cv.pdf" download>
              {t.profile.cvLabel}
            </a>
            {hasCertificates ? (
              <a className="profile-download profile-download-secondary" href="/certificates.zip" download>
                {t.profile.certificatesLabel}
              </a>
            ) : null}
          </div>
        </div>
      </header>

      <p className="profile-summary m-0 text-ink-2 text-[0.92rem] leading-[1.6]">{t.profile.summary}</p>

      <div className="profile-grid mt-5 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-4">
        <div className="profile-track">
          <article className="profile-track-card">
            <p className="profile-track-label">{t.profile.statusLabel}</p>
            <h3 className="profile-track-title">{technologist?.title}</h3>
            <p className="profile-track-meta">{technologist?.institution}</p>
            {technologist?.note ? <p className="profile-track-note">{technologist.note}</p> : null}
          </article>

          {technicalProgram ? (
            <article className="profile-track-card">
              <p className="profile-track-label">Technical training</p>
              <h3 className="profile-track-title">{technicalProgram.title}</h3>
              {technicalProgram.subtitle ? <p className="profile-track-meta">{technicalProgram.subtitle}</p> : null}
              <ul className="profile-track-list">
                {technicalProgram.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ) : null}

          {courseProgram ? (
            <article className="profile-track-card">
              <p className="profile-track-label">Courses</p>
              <h3 className="profile-track-title">{courseProgram.title}</h3>
              {courseProgram.subtitle ? <p className="profile-track-meta">{courseProgram.subtitle}</p> : null}
              <ul className="profile-track-list">
                {courseProgram.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ) : null}

          <article className="profile-track-card">
            <p className="profile-track-label">{t.profile.schoolingTitle}</p>
            <div className="profile-track-stack">
              {t.profile.schooling.map((entry) => (
                <div key={entry.title} className="profile-track-item">
                  <h4>{entry.title}</h4>
                  <p>{entry.institution}</p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="profile-column grid gap-4">
          <article className="profile-card profile-card-compact border border-line/20 rounded-md p-4 bg-surface-4">
            <div className="profile-card-head">
              <h3 className="profile-card-title m-0 text-[0.78rem] font-mono tracking-[0.1em] uppercase text-signal-cyan">{t.profile.skills.title}</h3>
            </div>
            <div className="profile-skill-grid mt-3 flex flex-wrap gap-2">
              {t.profile.skills.items.map((skill) => (
                <span key={skill} className="profile-skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
