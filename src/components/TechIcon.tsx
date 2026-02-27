interface TechIconProps {
  tech: string | null;
  className?: string;
}

export default function TechIcon({ tech, className }: TechIconProps) {
  if (tech === 'html') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 4h16l-1.4 15.8L12 21.8l-6.6-2L4 4Z" fill="currentColor" fillOpacity="0.2" />
        <path d="M7.4 8h9.2M8 11.6h8.4M8.5 15.2h6.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (tech === 'css') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 4h16l-1.4 15.8L12 21.8l-6.6-2L4 4Z" fill="currentColor" fillOpacity="0.2" />
        <path d="M16.3 8H7.7l.3 3.6h7.9l-.5 5L12 17.6l-3-.9-.2-2.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (tech === 'react') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="8" ry="3.2" stroke="currentColor" strokeWidth="1.6" />
        <ellipse cx="12" cy="12" rx="8" ry="3.2" transform="rotate(60 12 12)" stroke="currentColor" strokeWidth="1.6" />
        <ellipse cx="12" cy="12" rx="8" ry="3.2" transform="rotate(120 12 12)" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }
  if (tech === 'typescript') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" fill="currentColor" fillOpacity="0.18" />
        <path d="M7 9.2h10M11 9.2v7.6M13.9 11.9h2.8a1.6 1.6 0 0 1 0 3.2h-1.4a1.6 1.6 0 1 0 0 3.2h2.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (tech === 'tailwind') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 9.8c1.4-1.8 2.8-2.6 4.2-2.6 2.2 0 3.6 1 4.3 3.1.4 1.1.9 1.6 1.4 1.6 1 0 1.8-.7 2.6-2.1-1.4 1.8-2.8 2.6-4.2 2.6-2.2 0-3.6-1-4.3-3.1-.4-1.1-.9-1.6-1.4-1.6-1 0-1.8.7-2.6 2.1Zm-2 6c1.4-1.8 2.8-2.6 4.2-2.6 2.2 0 3.6 1 4.3 3.1.4 1.1.9 1.6 1.4 1.6 1 0 1.8-.7 2.6-2.1-1.4 1.8-2.8 2.6-4.2 2.6-2.2 0-3.6-1-4.3-3.1-.4-1.1-.9-1.6-1.4-1.6-1 0-1.8.7-2.6 2.1Z" fill="currentColor" />
      </svg>
    );
  }
  if (tech === 'nodejs') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3.4 4.8 7.5v9L12 20.6l7.2-4.1v-9L12 3.4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9.2 15.6V9.7l3 1.7v5.9m2.2-6.6-3-1.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (tech === 'express') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5.5 7.8h13m-13 4.2h10.4m-10.4 4.2h13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="17.8" cy="12" r="1.5" fill="currentColor" />
      </svg>
    );
  }
  if (tech === 'sqlite') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <ellipse cx="12" cy="7" rx="5.2" ry="2.2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M6.8 7v4.8c0 1.2 2.3 2.2 5.2 2.2s5.2-1 5.2-2.2V7" stroke="currentColor" strokeWidth="1.7" />
        <path d="M6.8 11.2v4.8c0 1.2 2.3 2.2 5.2 2.2s5.2-1 5.2-2.2v-4.8" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }
  if (tech === 'mongodb') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 4.2c1.8 2 2.7 4.2 2.7 6.6 0 3.7-2 6.4-2.7 7.2-.7-.8-2.7-3.5-2.7-7.2 0-2.4.9-4.6 2.7-6.6Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M12 8.1v11.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (tech === 'docker') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4.2" y="10.8" width="3" height="2.2" rx="0.5" fill="currentColor" />
        <rect x="7.8" y="10.8" width="3" height="2.2" rx="0.5" fill="currentColor" />
        <rect x="11.4" y="10.8" width="3" height="2.2" rx="0.5" fill="currentColor" />
        <rect x="7.8" y="8.2" width="3" height="2.1" rx="0.5" fill="currentColor" fillOpacity="0.9" />
        <rect x="11.4" y="8.2" width="3" height="2.1" rx="0.5" fill="currentColor" fillOpacity="0.9" />
        <path d="M4.2 13.8h11c1.9 0 3.4-.8 4.1-2.4-.7-.3-1.3-.2-1.8.1-.4-.7-1.2-1.1-2.2-1.1h-.6v1.4h.4c.5 0 .8.2.8.6 0 .8-.9 1.4-2 1.4H4.2v0Z" fill="currentColor" fillOpacity="0.85" />
      </svg>
    );
  }
  if (tech === 'prisma') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8.1 4.2 16.8 6.4 11.6 19.7 4.5 11.2 8.1 4.2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="m16.8 6.4-5.2 13.3 7.6-5.8-2.4-7.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    );
  }
  if (tech === 'socketio') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="6.2" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="1.3" fill="currentColor" />
        <path d="M12 2.8v2.5M12 18.7v2.5M21.2 12h-2.5M5.3 12H2.8M18.2 5.8l-1.8 1.8M7.6 16.4l-1.8 1.8M18.2 18.2l-1.8-1.8M7.6 7.6 5.8 5.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (tech === 'i18n') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="7.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4.8 12h14.4M12 4.8c1.6 2 2.4 4.4 2.4 7.2S13.6 17.2 12 19.2M12 4.8c-1.6 2-2.4 4.4-2.4 7.2s.8 5.2 2.4 7.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (tech === 'javascript') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" fillOpacity="0.2" />
        <path d="M9.5 9.2v6.2c0 1-.5 1.5-1.4 1.5-.6 0-1.1-.2-1.5-.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M13.2 15.6c.5.7 1.1 1.1 1.9 1.1.8 0 1.4-.4 1.4-1 0-.6-.4-.9-1.4-1.3l-.5-.2c-1.3-.5-2.2-1.2-2.2-2.6 0-1.3 1-2.3 2.6-2.3 1.1 0 1.9.4 2.5 1.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (tech === 'git') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7.4 4.8a1.6 1.6 0 0 1 2.2 0l9.6 9.6a1.6 1.6 0 0 1 0 2.2l-2.6 2.6a1.6 1.6 0 0 1-2.2 0L4.8 9.6a1.6 1.6 0 0 1 0-2.2l2.6-2.6Z" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="9" cy="9" r="1.2" fill="currentColor" />
        <circle cx="12" cy="12" r="1.2" fill="currentColor" />
        <circle cx="15" cy="15" r="1.2" fill="currentColor" />
        <path d="M9.8 9.8 11.2 11.2M12.8 12.8 14.2 14.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  return null;
}
