import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { FiBriefcase, FiGrid, FiMail, FiMenu, FiUser, FiX } from 'react-icons/fi';

interface NavigationDrawerProps {
  sections: { id: string; label: string }[];
  activeSection: string;
  onNavigate: (section: string) => void;
  navigationLabel: string;
  closeLabel: string;
}

const sectionIcons = {
  overview: FiGrid,
  projects: FiBriefcase,
  profile: FiUser,
  contact: FiMail,
} as const;

export default function NavigationDrawer({
  sections,
  activeSection,
  onNavigate,
  navigationLabel,
  closeLabel,
}: NavigationDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimerRef = useRef<number | null>(null);
  const previousActiveSectionRef = useRef(activeSection);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const activeLabel = sections.find((section) => section.id === activeSection)?.label ?? activeSection;

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const finishClose = useCallback(() => {
    setIsOpen(false);
    setIsClosing(false);
    closeTimerRef.current = null;
  }, []);

  const handleClose = useCallback(() => {
    if (!isOpen && !isClosing) return;

    clearCloseTimer();
    setIsClosing(true);
    closeTimerRef.current = window.setTimeout(finishClose, 240);
  }, [clearCloseTimer, finishClose, isClosing, isOpen]);

  const handleOpen = useCallback(() => {
    clearCloseTimer();
    setIsClosing(false);
    setIsOpen(true);
  }, [clearCloseTimer]);

  useEffect(() => {
    if (!isOpen) return undefined;

    document.body.classList.add('overflow-hidden');
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 860) {
        clearCloseTimer();
        finishClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
      clearCloseTimer();
    };
  }, [clearCloseTimer, finishClose, handleClose, isOpen]);

  useEffect(() => {
    if (isOpen && previousActiveSectionRef.current !== activeSection) {
      handleClose();
    }

    previousActiveSectionRef.current = activeSection;
  }, [activeSection, handleClose, isOpen]);

  const handleNavClick = (sectionId: string) => {
    if (sectionId === activeSection) {
      handleClose();
      return;
    }

    onNavigate(sectionId);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className="topbar-drawer-trigger inline-flex h-10 w-10 flex-none items-center justify-center rounded-full border border-line/20 bg-surface-0/88 text-ink-2 transition-all duration-150 hover:border-signal-cyan/35 hover:bg-surface-0 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-cyan/45 md:hidden"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-drawer"
      >
        <FiMenu className="h-5 w-5" />
      </button>

      {isOpen && typeof document !== 'undefined' && createPortal(
        <>
          <div
            className={`mobile-nav-overlay ${isClosing ? 'mobile-nav-overlay-closing' : ''}`}
            onClick={handleClose}
            aria-hidden="true"
          />

          <div
            id="mobile-navigation-drawer"
            className={`mobile-nav-panel ${isClosing ? 'mobile-nav-panel-closing' : ''}`}
            role="dialog"
            aria-modal="true"
            aria-label={navigationLabel}
          >
            <div className="mobile-nav-sheet">
              <div className="mobile-nav-head">
                <div className="mobile-nav-head-copy">
                  <span className="mobile-nav-kicker">{navigationLabel}</span>
                  <p className="mobile-nav-active-label">{activeLabel}</p>
                </div>

                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={handleClose}
                  className="mobile-nav-close"
                  aria-label={closeLabel}
                >
                  <FiX className="h-5 w-5" />
                </button>
              </div>

              <nav className="mobile-nav-list-wrap">
                <ul className="flex flex-col gap-2.5">
                  {sections.map((section) => {
                    const isActive = section.id === activeSection;
                    const SectionIcon = sectionIcons[section.id as keyof typeof sectionIcons] ?? FiGrid;

                    return (
                      <li key={section.id}>
                        <button
                          type="button"
                          onClick={() => handleNavClick(section.id)}
                          className={`mobile-nav-link group ${
                            isActive ? 'mobile-nav-link-active' : 'mobile-nav-link-idle'
                          }`}
                          aria-current={isActive ? 'page' : undefined}
                        >
                          <span className="mobile-nav-link-main">
                            <span
                              className={`mobile-nav-link-icon ${
                                isActive ? 'mobile-nav-link-icon-active' : 'mobile-nav-link-icon-idle'
                              }`}
                              aria-hidden="true"
                            >
                              <SectionIcon className="h-4 w-4" />
                            </span>
                            <span className="mobile-nav-link-label">{section.label}</span>
                          </span>
                          <span
                            className={`mobile-nav-link-indicator ${
                              isActive ? 'mobile-nav-link-indicator-active' : 'mobile-nav-link-indicator-idle'
                            }`}
                            aria-hidden="true"
                          >
                            {isActive ? 'Current' : ''}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </>,
        document.body,
      )}
    </>
  );
}
