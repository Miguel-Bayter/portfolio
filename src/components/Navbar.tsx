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

  return (
    <nav className="navbar fixed top-0 z-50 w-full bg-base-100/80 px-4 shadow-sm backdrop-blur-lg lg:px-8">
      <div className="navbar-start gap-2">
        <div className="dropdown lg:hidden">
          <button
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
            onClick={onToggleMobileMenu}
            aria-label={t.a11y.navigation}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {mobileMenuOpen && (
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow-lg"
            >
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className={activeSection === item.id ? 'active font-semibold' : ''}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

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

        {/* Mobile: just initials */}
        <a
          href="#overview"
          onClick={(e) => { e.preventDefault(); onNavigate('overview'); }}
          className="text-lg font-bold tracking-tight sm:hidden"
        >
          MB
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
  );
}
