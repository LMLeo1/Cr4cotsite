import { VideoCard } from './VideoCard';
import { videos } from '../../data/site';
import { useScrollAnimation } from '../../hooks';
import { useRef, useState, useEffect } from 'react';
import { IconChevronLeft, IconChevronRight } from './Icons';

interface VideoCarouselProps {
  title: string;
  videos: typeof videos;
  category?: string;
  showViewAll?: boolean;
  viewAllHref?: string;
}

export function VideoCarousel({ title, videos, category, showViewAll = true, viewAllHref }: VideoCarouselProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll, { passive: true });
      checkScroll();
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  return (
    <section
      ref={ref}
      id={category ? `videos-${category.toLowerCase().replace(/\s+/g, '-')}` : undefined}
      className={`mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      aria-labelledby={`${category ? `videos-${category.toLowerCase().replace(/\s+/g, '-')}` : 'videos'}-title`}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="section-title text-2xl md:text-3xl">{title}</h2>
        {showViewAll && viewAllHref && (
          <a
            href={viewAllHref}
            className="text-text-muted hover:text-primary transition-colors text-sm font-medium flex items-center gap-1 hidden sm:block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir tout
            <IconChevronRight size={16} aria-hidden="true" />
          </a>
        )}
      </div>

      <div className="relative">
        {/* Left scroll button - desktop only */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 w-12 h-12 rounded-full bg-bg/90 backdrop-blur border border-border flex items-center justify-center text-text-muted hover:text-text hover:bg-bg-elevated transition-all duration-200 hidden md:flex"
          aria-label="Faire défiler vers la gauche"
          disabled={!showLeftArrow}
          style={{ opacity: showLeftArrow ? 1 : 0, pointerEvents: showLeftArrow ? 'auto' : 'none' }}
        >
          <IconChevronLeft size={24} aria-hidden="true" />
        </button>

        {/* Scroll container */}
        <div
          ref={scrollContainerRef}
          className="scroll-container"
          role="list"
          aria-label={`${title} - liste des vidéos`}
        >
          {videos.map((vid: typeof videos[0], index: number) => (
            <VideoCard key={vid.id} video={vid} index={index} />
          ))}
        </div>

        {/* Right scroll button - desktop only */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 w-12 h-12 rounded-full bg-bg/90 backdrop-blur border border-border flex items-center justify-center text-text-muted hover:text-text hover:bg-bg-elevated transition-all duration-200 hidden md:flex"
          aria-label="Faire défiler vers la droite"
          disabled={!showRightArrow}
          style={{ opacity: showRightArrow ? 1 : 0, pointerEvents: showRightArrow ? 'auto' : 'none' }}
        >
          <IconChevronRight size={24} aria-hidden="true" />
        </button>
      </div>

      {/* Mobile scroll indicator */}
      <div className="md:hidden mt-3 flex justify-center gap-2" aria-hidden="true">
        <span className={`w-2 h-2 rounded-full transition-colors ${showLeftArrow ? 'bg-border' : 'bg-primary'}`} />
        <span className={`w-2 h-2 rounded-full transition-colors ${showRightArrow ? 'bg-primary' : 'bg-border'}`} />
      </div>
    </section>
  );
}