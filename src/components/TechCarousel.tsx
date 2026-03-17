import { useState } from 'react';
import type { ContentLocale } from '../types';
import TechIcon from './TechIcon';

interface TechCarouselProps {
  t: ContentLocale;
}

export default function TechCarousel({ t }: TechCarouselProps) {
  const complexityOrder: Record<string, number> = {
    'next.js': 0,
    nestjs: 1,
    'socket.io': 2,
    prisma: 3,
    typescript: 4,
    react: 5,
    vite: 6,
    tailwind: 7,
    'node.js': 8,
    express: 9,
    mongodb: 10,
    mysql: 11,
    i18n: 12,
    javascript: 13,
    html5: 14,
    css3: 15,
    git: 16,
    docker: 17,
  };
  const items = [...t.overview.techStack.items].sort((a, b) => {
    const leftRank = complexityOrder[a.name.toLowerCase()] ?? (a.rank ?? 999);
    const rightRank = complexityOrder[b.name.toLowerCase()] ?? (b.rank ?? 999);
    if (leftRank !== rightRank) return leftRank - rightRank;
    return a.name.localeCompare(b.name);
  });
  const [isPaused, setIsPaused] = useState(false);
  const [isReverse, setIsReverse] = useState(false);

  function handlePrev() {
    setIsReverse(true);
    setIsPaused(true);
  }

  function handleNext() {
    setIsReverse(false);
    setIsPaused(true);
  }

  return (
    <section
      className="tech-stack-carousel overview-rhythm-band"
      aria-label={t.overview.techStack.a11yLabel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="tech-carousel-head">
        <button
          type="button"
          onClick={handlePrev}
          className="tech-carousel-nav"
          aria-label={t.overview.techStack.prev}
        >
          {'<-'}
        </button>

        <div className="tech-carousel-viewport" role="list">
          <div
            className={`tech-carousel-track tech-carousel-track-marquee ${
              isPaused ? 'is-paused' : ''
            } ${isReverse ? 'is-reverse' : ''}`}
          >
            {[...items, ...items].map((item, index) => (
              <article key={`${item.name}-${index}`} className="tech-carousel-item" role="listitem" aria-hidden={index >= items.length}>
                <div className={`tech-orb tech-orb-${item.tone}`} data-tech={item.icon}>
                  <TechIcon tech={item.icon} className="tech-orb-icon" />
                  <span className="tech-orb-subtitle">{item.name}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handleNext}
          className="tech-carousel-nav"
          aria-label={t.overview.techStack.next}
        >
          {'->'}
        </button>
      </div>
    </section>
  );
}
