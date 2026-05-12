import { useEffect, useRef } from 'react';
import type { SectionId, Theme, Language } from '../types';
import type { ContentLocale } from '../types';
import profilePhoto from '../img/Profile.jpg';
import { FaLinkedin } from 'react-icons/fa';

interface NavbarProps {
  navItems: { id: SectionId; label: string }[];
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
  language: Language;
  theme: Theme;
  onToggleLanguage: () => void;
  onCycleTheme: () => void;
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  t: ContentLocale;
}

export function Navbar({
  navItems,
  activeSection,
  onNavigate,
  language,
  theme,
  onToggleLanguage,
  onCycleTheme,
  mobileMenuOpen,
  onToggleMobileMenu,
  t,
}: NavbarProps) {
  const themeIcon = theme === 'dark' ? '🌙' : theme === 'light' ? '☀️' : '💻';
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        const target = e.target as HTMLElement;
        if (!target.closest('[data-hamburger-btn]')) {
          onToggleMobileMenu();
        }
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, onToggleMobileMenu]);

  return (
    <>
      <nav className="navbar fixed top-0 z-50 w-full bg-base-100/80 px-4 shadow-sm backdrop-blur-lg lg:px-8">
        <div className="navbar-start gap-2">
          <button
            data-hamburger-btn
            className="btn btn-ghost btn-circle lg:hidden"
            onClick={onToggleMobileMenu}
            aria-label={t.a11y.navigation}
            aria-expanded={mobileMenuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ transform: mobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Pill badge with photo, name, LinkedIn */}
          <a
            href="https://www.linkedin.com/in/miguel-eduardo-bayter-quintana-98653b128"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-base-300 bg-base-200 px-3 py-1.5 shadow-sm transition-shadow hover:shadow-md sm:flex"
          >
            <div className="avatar">
              <div className="w-9 overflow-hidden rounded-full ring-1 ring-base-300">
                <img src={profilePhoto} alt="Miguel Bayter" className="h-full w-full object-cover object-[42%_12%]" />
              </div>
            </div>
            <span className="text-sm font-bold tracking-wider uppercase">Miguel Bayter</span>
            <FaLinkedin className="h-5 w-5 text-blue-500" />
          </a>

          {/* Mobile: avatar linking to LinkedIn */}
          <a
            href="https://www.linkedin.com/in/miguel-eduardo-bayter-quintana-98653b128"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden"
          >
            <div className="avatar">
              <div className="w-9 overflow-hidden rounded-full">
                <img src={profilePhoto} alt="Miguel Bayter" className="h-full w-full object-cover object-[42%_12%]" />
              </div>
            </div>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 px-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`transition-colors ${
                    activeSection === item.id
                      ? 'font-semibold text-primary'
                      : 'text-base-content/70 hover:text-base-content'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end gap-1">
          <button
            onClick={onToggleLanguage}
            className="btn btn-ghost btn-sm btn-circle"
            aria-label={t.a11y.toggleLanguage}
          >
            <span className="text-sm font-semibold">{language === 'en' ? 'ES' : 'EN'}</span>
          </button>
          <button
            onClick={onCycleTheme}
            className="btn btn-ghost btn-sm btn-circle"
            aria-label={t.a11y.toggleTheme}
          >
            <span className="text-sm">{themeIcon}</span>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        ref={menuRef}
        className={`fixed top-[4rem] left-0 right-0 z-40 bg-base-100 shadow-lg transition-all duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <ul className="menu w-full p-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-base-content hover:bg-base-200'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
