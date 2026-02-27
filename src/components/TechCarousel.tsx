import { useState } from 'react';
import type { ContentLocale } from '../types';
import TechIcon from './TechIcon';

interface TechCarouselProps {
  t: ContentLocale;
}

export default function TechCarousel({ t }: TechCarouselProps) {
  const items = [...t.overview.techStack.items].sort((a, b) => (a.rank ?? 999) - (b.rank ?? 999));
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  const [isReverse, setIsReverse] = useState(false);

  function handlePrev() {
    setIsReverse(true);
    setIsAutoPlayPaused(true);
  }

  function handleNext() {
    setIsReverse(false);
    setIsAutoPlayPaused(true);
  }

  return (
    <section
      className="tech-stack-carousel overview-rhythm-band"
      aria-label={t.overview.techStack.a11yLabel}
      onMouseEnter={() => setIsAutoPlayPaused(true)}
      onMouseLeave={() => {
        setIsAutoPlayPaused(false);
      }}
      onFocusCapture={() => setIsAutoPlayPaused(true)}
      onBlurCapture={() => setIsAutoPlayPaused(false)}
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
              isAutoPlayPaused ? 'is-paused' : ''
            } ${isReverse ? 'is-reverse' : ''}`}
          >
            {[...items, ...items].map((item, index) => (
              <article key={`${item.name}-${index}`} className="tech-carousel-item" role="listitem">
                <div className={`tech-orb tech-orb-${item.tone}`}>
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
