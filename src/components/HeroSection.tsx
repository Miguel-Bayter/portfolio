import { useState, useEffect, useRef, useCallback } from 'react';
import type { ContentLocale } from '../types';
import anim01 from '../img/animation/01.png';
import anim02 from '../img/animation/02.png';
import anim03 from '../img/animation/03.png';
import anim04 from '../img/animation/04.png';
import anim05 from '../img/animation/05.png';
import anim06 from '../img/animation/06.png';
import anim07 from '../img/animation/07.png';
import anim08 from '../img/animation/08.png';

const ANIMATION_FRAMES = [anim01, anim02, anim03, anim04, anim05, anim06, anim07, anim08];
const FRAME_DURATION = 150;

interface HeroSectionProps {
  t: ContentLocale;
  onNavigate: (id: 'contact') => void;
}

export function HeroSection({ t, onNavigate }: HeroSectionProps) {
  const hero = t.overview.hero;
  const [isActive, setIsActive] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [prevFrame, setPrevFrame] = useState(0);
  const [isCrossfading, setIsCrossfading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const animationRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef<number>(0);
  const hasReachedEndRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let loadedCount = 0;
    ANIMATION_FRAMES.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === ANIMATION_FRAMES.length) {
          setIsLoaded(true);
        }
      };
    });
  }, []);

  const advanceFrame = useCallback(() => {
    setCurrentFrame((current) => {
      const next = (current + 1) % ANIMATION_FRAMES.length;
      setPrevFrame(current);
      setIsCrossfading(true);
      setTimeout(() => setIsCrossfading(false), 50);
      
      if (next === ANIMATION_FRAMES.length - 1) {
        hasReachedEndRef.current = true;
      }
      
      return next;
    });
  }, []);

  const animate = useCallback(
    (timestamp: number) => {
      if (hasReachedEndRef.current) {
        return;
      }

      if (!lastFrameTimeRef.current) {
        lastFrameTimeRef.current = timestamp;
      }

      const elapsed = timestamp - lastFrameTimeRef.current;

      if (elapsed >= FRAME_DURATION) {
        advanceFrame();
        lastFrameTimeRef.current = timestamp;
      }

      animationRef.current = requestAnimationFrame(animate);
    },
    [advanceFrame],
  );

  useEffect(() => {
    if (isActive && isLoaded) {
      hasReachedEndRef.current = false;
      lastFrameTimeRef.current = 0;
      animationRef.current = requestAnimationFrame(animate);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (!isActive) {
        setCurrentFrame(0);
        setPrevFrame(0);
        setIsCrossfading(false);
        hasReachedEndRef.current = false;
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive, isLoaded, animate]);

  const handleActivate = () => {
    if (isLoaded && !hasReachedEndRef.current) setIsActive(true);
  };

  const handleDeactivate = () => {
    setIsActive(false);
  };

  const handleTap = () => {
    if (isLoaded && !hasReachedEndRef.current) {
      setIsActive(true);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-base-100 via-base-200 to-primary/10 pt-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-16 lg:flex-row lg:gap-12 lg:px-8">
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-content shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-content opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-content"></span>
            </span>
            {t.topbar.status}
          </div>

          <p className="mb-2 text-lg font-medium text-base-content/60">
            {hero.nameLine}
          </p>

          <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {hero.roleLinePrefix && <span>{hero.roleLinePrefix} </span>}
            <span className="text-primary">{hero.roleLineHighlight}</span>
            {hero.roleLineSuffix && <span> {hero.roleLineSuffix}</span>}
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-lg text-base-content/70 lg:mx-0">
            {hero.description}
          </p>

          <div className="flex flex-col items-center gap-3 lg:items-start">
            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href="#projects" className="btn btn-primary btn-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                {hero.ctaPrimary}
              </a>
              <button onClick={() => onNavigate('contact')} className="btn btn-outline btn-primary btn-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                {hero.ctaSecondary}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          ref={containerRef}
          className="mt-12 flex-shrink-0 touch-manipulation lg:mt-0"
          {...(isMobile
            ? { onTouchEnd: handleTap }
            : {
                onMouseEnter: handleActivate,
                onMouseLeave: handleDeactivate,
              })}
        >
          <div className="w-80 sm:w-96 md:w-[28rem] overflow-hidden rounded-3xl">
            <figure className="relative aspect-square">
              <img
                src={ANIMATION_FRAMES[prevFrame]}
                alt=""
                aria-hidden="true"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-75 ${
                  isCrossfading ? 'opacity-100' : 'opacity-0'
                }`}
              />

              <img
                src={ANIMATION_FRAMES[currentFrame]}
                alt="Interactive animation"
                className="relative w-full h-full object-cover"
              />

              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <span className="loading loading-spinner loading-lg text-primary"></span>
                </div>
              )}
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
