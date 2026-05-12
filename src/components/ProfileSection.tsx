import { useRef } from 'react';
import type { ContentLocale, Language } from '../types';
import cvEn from '../cv/cv-en.pdf';
import cvEs from '../cv/cv-es.pdf';
import profileImg from '../img/Profile.jpg';

interface ProfileSectionProps {
  t: ContentLocale;
  language: Language;
}

export function ProfileSection({ t, language }: ProfileSectionProps) {
  const cvUrl = language === 'en' ? cvEn : cvEs;
  const profile = t.profile;
  const certScrollRef = useRef<HTMLDivElement>(null);

  const allCertificates = profile.programs.flatMap((group) =>
    (group.certificates || []).map((cert, i) => ({
      ...cert,
      group: group.title,
      index: i,
    })),
  );

  const scrollCerts = (direction: 'up' | 'down') => {
    if (certScrollRef.current) {
      const scrollAmount = 120;
      certScrollRef.current.scrollBy({
        top: direction === 'up' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-base-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">{t.nav.profile}</h2>

        {/* Profile header card with avatar */}
        <div className="card bg-base-100 shadow-md mb-8">
          <div className="card-body items-center text-center md:flex-row md:items-start md:text-left md:gap-8">
            <div className="avatar flex-shrink-0">
              <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={profileImg} alt="Profile photo" className="[object-position:center_10%]" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">{t.role}</h3>
              <p className="mt-2 text-base-content/70">{profile.summary}</p>
              <div className="mt-4 flex flex-col items-center gap-3 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-success px-3 py-1.5 text-xs font-semibold text-success-content shadow-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success-content opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-success-content"></span>
                    </span>
                    {profile.statusValue}
                  </span>
                </div>
                <a href={cvUrl} download className="btn btn-primary btn-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {language === 'en' ? 'Download CV (EN)' : 'Descargar CV (ES)'}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Two-column layout: Education + Certificates/Skills */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left column: Education timeline */}
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h3 className="card-title text-lg">{profile.schoolingTitle}</h3>
              <ul className="timeline timeline-vertical">
                {profile.education.map((edu, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <li key={i}>
                      {i > 0 && <hr />}
                      {isLeft ? (
                        <>
                          <div className="timeline-start timeline-box bg-base-200 border-base-300">
                            <div className="font-bold text-sm">{edu.title}</div>
                            <div className="text-sm text-base-content/70 mt-1">{edu.institution}</div>
                            {edu.note && <div className="text-xs text-base-content/50 mt-2 leading-relaxed">{edu.note}</div>}
                          </div>
                          <div className="timeline-middle">
                            <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-base-100 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </div>
                          <div className="timeline-end text-xs text-base-content/50 font-medium whitespace-nowrap">
                            {edu.period}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="timeline-start text-xs text-base-content/50 font-medium whitespace-nowrap">
                            {edu.period}
                          </div>
                          <div className="timeline-middle">
                            <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-base-100 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </div>
                          <div className="timeline-end timeline-box bg-base-200 border-base-300">
                            <div className="font-bold text-sm">{edu.title}</div>
                            <div className="text-sm text-base-content/70 mt-1">{edu.institution}</div>
                            {edu.note && <div className="text-xs text-base-content/50 mt-2 leading-relaxed">{edu.note}</div>}
                          </div>
                        </>
                      )}
                      {i < profile.education.length - 1 && <hr />}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Right column: Certificates + Skills + Capabilities */}
          <div className="space-y-6">
            {/* Certificates carousel */}
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <div className="flex items-center justify-between">
                  <h3 className="card-title text-lg">{profile.certificatesLabel}</h3>
                  <div className="flex gap-1">
                    <button
                      onClick={() => scrollCerts('up')}
                      className="btn btn-ghost btn-xs btn-square"
                      aria-label={t.profile.scrollCertificatesUpLabel}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => scrollCerts('down')}
                      className="btn btn-ghost btn-xs btn-square"
                      aria-label={t.profile.scrollCertificatesDownLabel}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div
                  ref={certScrollRef}
                  className="flex flex-col gap-3 overflow-y-auto pr-2 max-h-80 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
                >
                  {allCertificates.map((cert, i) => (
                    <a
                      key={`${cert.group}-${cert.index}`}
                      href={cert.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-lg border border-base-300 p-3 transition-colors hover:bg-base-200 cursor-pointer"
                    >
                      <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium truncate">{cert.label}</p>
                        <p className="text-xs text-base-content/50">{cert.group}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Key skills */}
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h3 className="card-title text-lg mb-5">{profile.skills.title}</h3>
                <div className="flex flex-wrap gap-2.5">
                  {profile.skills.items.map((skill, i) => {
                    const skillConfig: Record<string, { bg: string; text: string; icon: React.ReactNode }> = {
                      "React + TypeScript": {
                        bg: "bg-blue-100 dark:bg-blue-500/10",
                        text: "text-blue-800 dark:text-blue-400",
                        icon: (
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                            <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.31 0-.593.068-.838.204C4.654 2.39 4.03 4.56 4.03 7.32c0 .856.084 1.756.242 2.678C2.18 10.67 1 11.63 1 12.004c0 .373 1.18 1.334 3.272 2.006-.158.922-.242 1.822-.242 2.678 0 2.76.624 4.93 2.236 5.784.245.136.528.204.838.204 1.345 0 3.107-.96 4.887-2.622 1.781 1.653 3.542 2.602 4.888 2.602.31 0 .593-.068.838-.204 1.612-.854 2.236-3.024 2.236-5.784 0-.856-.084-1.756-.242-2.678C21.82 13.33 23 12.37 23 12c0-.374-1.18-1.334-3.272-2.006.158-.922.242-1.822.242-2.678 0-2.76-.624-4.93-2.236-5.784a1.426 1.426 0 0 0-.838-.204z" />
                          </svg>
                        ),
                      },
                      "Next.js + Vite": {
                        bg: "bg-neutral-200 dark:bg-zinc-700",
                        text: "text-neutral-900 dark:text-white",
                        icon: (
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                            <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.86-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
                          </svg>
                        ),
                      },
                      "Node.js + Express": {
                        bg: "bg-green-100 dark:bg-green-500/10",
                        text: "text-green-800 dark:text-green-400",
                        icon: (
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                            <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339a.29.29 0 0 0 .272 0l8.795-5.076a.277.277 0 0 0 .134-.238V6.921a.28.28 0 0 0-.137-.242L11.998 1.607a.27.27 0 0 0-.268 0L2.942 6.68a.283.283 0 0 0-.14.243v10.15c0 .099.053.19.138.236l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.55L2.06 18.675A1.857 1.857 0 0 1 1.14 17.07V6.921c0-.682.365-1.315.956-1.654L10.885.194a1.93 1.93 0 0 1 1.846 0l8.794 5.076c.59.339.956.972.956 1.654v10.15a1.86 1.86 0 0 1-.956 1.654l-8.794 5.076c-.28.163-.6.247-.922.247z" />
                          </svg>
                        ),
                      },
                      "Python + FastAPI": {
                        bg: "bg-yellow-100 dark:bg-yellow-500/10",
                        text: "text-yellow-800 dark:text-yellow-400",
                        icon: (
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                            <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM12.09 23.82l-.9-.2-.73-.26-.59-.3-.45-.32-.34-.34-.25-.34-.16-.33-.1-.3-.04-.26-.02-.2.01-.13v-5.34l.05-.63.13-.55.21-.46.26-.38.3-.31.33-.25.35-.19.35-.14.33-.1.3-.07.26-.04.21-.02h5.56l.69-.05.59-.14.5-.22.41-.27.33-.32.27-.35.2-.36.15-.37.1-.35.07-.32.04-.27.02-.21v-3.06h5.16l.21.03.28.07.32.12.35.18.36.26.36.36.35.46.32.59.28.73.21.88.14 1.05.05 1.23-.06 1.22-.16 1.04-.24.87-.32.71-.36.57-.4.44-.42.33-.42.24-.4.16-.36.1-.32.05-.24.01h-.16l-.06-.01h-8.16v.83h5.64l.01 2.75.02.37-.05.34-.11.31-.17.28-.25.26-.31.23-.38.2-.44.18-.51.15-.58.12-.64.1-.71.06-.77.04-.84.02-1.27-.05zm6.3-1.98l.23-.33.08-.41-.08-.41-.23-.34-.33-.22-.41-.09-.41.09-.33.22-.23.34-.08.41.08.41.23.33.33.22.41.09.41-.09.33-.22z" />
                          </svg>
                        ),
                      },
                      "REST API design": {
                        bg: "bg-indigo-100 dark:bg-indigo-500/10",
                        text: "text-indigo-800 dark:text-indigo-400",
                        icon: (
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        ),
                      },
                      "Diseño de API REST": {
                        bg: "bg-indigo-100 dark:bg-indigo-500/10",
                        text: "text-indigo-800 dark:text-indigo-400",
                        icon: (
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        ),
                      },
                      "PostgreSQL + MongoDB": {
                        bg: "bg-blue-100 dark:bg-blue-500/10",
                        text: "text-blue-800 dark:text-blue-400",
                        icon: (
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                            <ellipse cx="12" cy="5" rx="9" ry="3" />
                            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                          </svg>
                        ),
                      },
                      "SQL & data modeling": {
                        bg: "bg-cyan-100 dark:bg-cyan-500/10",
                        text: "text-cyan-800 dark:text-cyan-400",
                        icon: (
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                          </svg>
                        ),
                      },
                      "SQL y modelado de datos": {
                        bg: "bg-cyan-100 dark:bg-cyan-500/10",
                        text: "text-cyan-800 dark:text-cyan-400",
                        icon: (
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                          </svg>
                        ),
                      },
                      "Git + GitHub Actions": {
                        bg: "bg-orange-100 dark:bg-orange-500/10",
                        text: "text-orange-800 dark:text-orange-400",
                        icon: (
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                        ),
                      },
                      "CI/CD pipelines": {
                        bg: "bg-green-100 dark:bg-green-500/10",
                        text: "text-green-800 dark:text-green-400",
                        icon: (
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        ),
                      },
                      "Pipelines CI/CD": {
                        bg: "bg-green-100 dark:bg-green-500/10",
                        text: "text-green-800 dark:text-green-400",
                        icon: (
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        ),
                      },
                      "Docker containers": {
                        bg: "bg-blue-100 dark:bg-blue-500/10",
                        text: "text-blue-800 dark:text-blue-400",
                        icon: (
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                            <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.27a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.27a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.27a.186.186 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.748.748 0 00-.75.748 11.687 11.687 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
                          </svg>
                        ),
                      },
                      "Contenedores Docker": {
                        bg: "bg-blue-100 dark:bg-blue-500/10",
                        text: "text-blue-800 dark:text-blue-400",
                        icon: (
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                            <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.27a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.27a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.27a.186.186 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.748.748 0 00-.75.748 11.687 11.687 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
                          </svg>
                        ),
                      },
                      "Tailwind CSS": {
                        bg: "bg-cyan-100 dark:bg-cyan-500/10",
                        text: "text-cyan-800 dark:text-cyan-400",
                        icon: (
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                          </svg>
                        ),
                      },
                      "Responsive UI": {
                        bg: "bg-violet-100 dark:bg-violet-500/10",
                        text: "text-violet-800 dark:text-violet-400",
                        icon: (
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                            <line x1="8" y1="21" x2="16" y2="21" />
                            <line x1="12" y1="17" x2="12" y2="21" />
                          </svg>
                        ),
                      },
                      "UI responsiva": {
                        bg: "bg-violet-100 dark:bg-violet-500/10",
                        text: "text-violet-800 dark:text-violet-400",
                        icon: (
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                            <line x1="8" y1="21" x2="16" y2="21" />
                            <line x1="12" y1="17" x2="12" y2="21" />
                          </svg>
                        ),
                      },
                      "i18n-ready interfaces": {
                        bg: "bg-emerald-100 dark:bg-emerald-500/10",
                        text: "text-emerald-800 dark:text-emerald-400",
                        icon: (
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          </svg>
                        ),
                      },
                      "Interfaces con i18n": {
                        bg: "bg-emerald-100 dark:bg-emerald-500/10",
                        text: "text-emerald-800 dark:text-emerald-400",
                        icon: (
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          </svg>
                        ),
                      },
                      "Testing (Vitest + Playwright)": {
                        bg: "bg-amber-100 dark:bg-amber-500/10",
                        text: "text-amber-800 dark:text-amber-400",
                        icon: (
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        ),
                      },
                      "OWASP security": {
                        bg: "bg-red-100 dark:bg-red-500/10",
                        text: "text-red-800 dark:text-red-400",
                        icon: (
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          </svg>
                        ),
                      },
                      "Seguridad OWASP": {
                        bg: "bg-red-100 dark:bg-red-500/10",
                        text: "text-red-800 dark:text-red-400",
                        icon: (
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          </svg>
                        ),
                      },
                      "System design": {
                        bg: "bg-purple-100 dark:bg-purple-500/10",
                        text: "text-purple-800 dark:text-purple-400",
                        icon: (
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="2" width="6" height="6" rx="1" />
                            <rect x="16" y="2" width="6" height="6" rx="1" />
                            <rect x="9" y="9" width="6" height="6" rx="1" />
                            <rect x="2" y="16" width="6" height="6" rx="1" />
                            <rect x="16" y="16" width="6" height="6" rx="1" />
                            <line x1="5" y1="8" x2="5" y2="16" />
                            <line x1="19" y1="8" x2="19" y2="16" />
                            <line x1="8" y1="5" x2="16" y2="5" />
                            <line x1="8" y1="19" x2="16" y2="19" />
                          </svg>
                        ),
                      },
                      "Diseño de sistemas": {
                        bg: "bg-purple-100 dark:bg-purple-500/10",
                        text: "text-purple-800 dark:text-purple-400",
                        icon: (
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="2" width="6" height="6" rx="1" />
                            <rect x="16" y="2" width="6" height="6" rx="1" />
                            <rect x="9" y="9" width="6" height="6" rx="1" />
                            <rect x="2" y="16" width="6" height="6" rx="1" />
                            <rect x="16" y="16" width="6" height="6" rx="1" />
                            <line x1="5" y1="8" x2="5" y2="16" />
                            <line x1="19" y1="8" x2="19" y2="16" />
                            <line x1="8" y1="5" x2="16" y2="5" />
                            <line x1="8" y1="19" x2="16" y2="19" />
                          </svg>
                        ),
                      },
                    };

                    const config = skillConfig[skill] || {
                      bg: "bg-indigo-100 dark:bg-indigo-500/10",
                      text: "text-indigo-800 dark:text-indigo-400",
                      icon: (
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ),
                    };

                    return (
                      <span
                        key={i}
                        className={`badge ${config.bg} ${config.text} border-0 gap-2 px-4 py-3 text-sm font-medium shadow-sm`}
                      >
                        {config.icon}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Key Capabilities */}
            {profile.deliverySignals && (
              <div className="card bg-base-100 shadow-md">
                <div className="card-body">
                  <h3 className="card-title text-lg">{profile.deliverySignals.title}</h3>
                  {profile.deliverySignals.subtitle && (
                    <p className="text-sm text-base-content/60">{profile.deliverySignals.subtitle}</p>
                  )}
                  <div className="flex flex-col gap-5">
                    {profile.deliverySignals.items.map((item, i) => {
                      const accentBorders = [
                        'border-l-4 border-l-blue-500',
                        'border-l-4 border-l-purple-500',
                        'border-l-4 border-l-emerald-500',
                      ];
                      const iconBgs = ['bg-blue-500', 'bg-purple-500', 'bg-emerald-500'];
                      const badgeAccents = [
                        'bg-blue-500/10 text-blue-600 dark:text-blue-400',
                        'bg-purple-500/10 text-purple-600 dark:text-purple-400',
                        'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
                      ];

                      return (
                        <div
                          key={i}
                          className={`rounded-2xl border border-base-300 bg-base-200 ${accentBorders[i]} p-6 shadow-sm`}
                        >
                          <div className="mb-5 flex items-center justify-center gap-3">
                            <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconBgs[i]} text-white shadow-md`}>
                              {i === 0 && (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                              )}
                              {i === 1 && (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                              )}
                              {i === 2 && (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                </svg>
                              )}
                            </div>
                            <span className="font-bold text-base text-base-content">{item.area}</span>
                          </div>
                          <div className="flex flex-wrap justify-center gap-2.5">
                            {item.tools.map((tool, j) => (
                              <span
                                key={j}
                                className={`badge border-0 gap-1.5 px-3.5 py-3 text-sm font-medium shadow-sm ${badgeAccents[i]}`}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                </svg>
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
