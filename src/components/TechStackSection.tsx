import { useRef, useEffect, useState } from 'react';
import type { ContentLocale } from '../types';
import { TechIcon } from './TechIcon';

interface TechStackSectionProps {
  t: ContentLocale;
}

const gradientMap: Record<string, string> = {
  orange: 'from-orange-300 to-orange-500',
  blue: 'from-blue-300 to-blue-500',
  amber: 'from-amber-300 to-amber-500',
  slate: 'from-slate-400 to-slate-600',
  indigo: 'from-indigo-300 to-indigo-500',
  cyan: 'from-cyan-300 to-cyan-500',
  green: 'from-green-300 to-green-500',
  forest: 'from-emerald-400 to-green-600',
};

const iconColorMap: Record<string, string> = {
  orange: 'text-white',
  blue: 'text-white',
  amber: 'text-white',
  slate: 'text-white',
  indigo: 'text-white',
  cyan: 'text-white',
  green: 'text-white',
  forest: 'text-white',
};

export function TechStackSection({ t }: TechStackSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState(1);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const items = t.overview.techStack.items;
  const setCount = 5;
  const duplicatedItems = [...items, ...items, ...items, ...items, ...items];

  useEffect(() => {
    const init = () => {
      if (scrollRef.current && scrollRef.current.scrollWidth > 0) {
        const oneSetWidth = scrollRef.current.scrollWidth / setCount;
        scrollRef.current.scrollLeft = oneSetWidth * 2;
        setIsInitialized(true);
      }
    };
    init();
    const timer = setTimeout(init, 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    let animationId: number;
    let lastTime = 0;
    const speed = 0.1;

    const animate = (time: number) => {
      if (!scrollRef.current) return;

      if (!lastTime) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;

      if (!isPaused) {
        const el = scrollRef.current;
        const oneSetWidth = el.scrollWidth / setCount;

        el.scrollLeft += speed * delta * scrollDirection;

        if (scrollDirection === 1 && el.scrollLeft >= oneSetWidth * 4) {
          el.scrollLeft = oneSetWidth * 2;
        } else if (scrollDirection === -1 && el.scrollLeft <= oneSetWidth) {
          el.scrollLeft = oneSetWidth * 3;
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isInitialized, scrollDirection, isPaused]);

  const toggleDirection = () => setScrollDirection((d) => -d);

  return (
    <div className="bg-base-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-center text-3xl font-bold text-base-content">{t.overview.title}</h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-base-content/60">
          {t.focus}
        </p>

        <div className="relative overflow-hidden rounded-2xl border border-base-200 bg-base-100 p-6 shadow-lg shadow-base-300/50">
          <button
            onClick={toggleDirection}
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 btn btn-circle btn-sm btn-ghost bg-base-100/90 backdrop-blur-sm shadow-md border border-base-200 hover:bg-base-200 rounded-full transition-all duration-300 hover:shadow-lg"
            aria-label={t.overview.techStack.prev}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-base-content/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto px-20 py-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {duplicatedItems.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="group flex flex-shrink-0 flex-col items-center gap-3"
              >
                <div className={`relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${gradientMap[tech.tone] || 'from-base-300 to-base-400'} shadow-lg shadow-base-300/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
                  <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                  <TechIcon icon={tech.icon} size={36} className={iconColorMap[tech.tone] || 'text-white'} />
                </div>
                <span className="text-xs font-semibold text-base-content/70 transition-colors group-hover:text-base-content">{tech.name}</span>
              </div>
            ))}
          </div>

          <button
            onClick={toggleDirection}
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 btn btn-circle btn-sm btn-ghost bg-base-100/90 backdrop-blur-sm shadow-md border border-base-200 hover:bg-base-200 rounded-full transition-all duration-300 hover:shadow-lg"
            aria-label={t.overview.techStack.next}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-base-content/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
