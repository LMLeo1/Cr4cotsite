import { videos } from '../../data/site';
import { useScrollAnimation } from '../../hooks';
import { useState } from 'react';
import { IconPlay, IconClock, IconEye } from './Icons';

interface VideoCardProps {
  video: typeof videos[0];
  index: number;
  onPlay?: (video: typeof videos[0]) => void;
}

export function VideoCard({ video, index, onPlay }: VideoCardProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const [isHovered, setIsHovered] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const handleClick = () => {
    if (onPlay) {
      onPlay(video);
    }
  };

  return (
    <div
      ref={ref}
      className={`video-card scroll-item group ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={`Regarder "${video.title}"`}
    >
      <div className="relative aspect-video bg-bg-elevated overflow-hidden">
        {/* Gradient overlay on hover */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            className="btn btn-primary opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
            aria-label={`Regarder "${video.title}"`}
          >
            <IconPlay size={32} aria-hidden="true" />
          </button>
        </div>
        {/* Duration badge */}
        <div className="absolute bottom-3 right-3 bg-bg/90 backdrop-blur text-xs font-medium text-text px-2 py-1 rounded">
          {video.duration}
        </div>
        {/* Thumbnail */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 ${isHovered ? 'scale-105' : ''}`}
          style={{
            backgroundImage: `url(${video.thumbnail})`,
          }}
          aria-hidden="true"
        />
      </div>

      {/* Video info - shown on hover for desktop, always visible on mobile */}
      <div className="video-card-content p-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-0.5 rounded text-xs font-medium bg-primary/20 text-primary">
            YouTube
          </span>
          <span className="text-xs text-text-subtle">{formatDate(video.publishedAt)}</span>
        </div>
        <h3 className="font-display text-base font-bold text-text mb-1 line-clamp-1">
          {video.title}
        </h3>
        <p className="text-text-muted text-sm line-clamp-2 mb-2">
          {video.description}
        </p>
        <div className="flex items-center gap-4 text-xs text-text-subtle">
          <span className="flex items-center gap-1">
            <IconEye size={12} aria-hidden="true" />
            {video.viewCount}
          </span>
          <span className="flex items-center gap-1">
            <IconClock size={12} aria-hidden="true" />
            {video.duration}
          </span>
        </div>
      </div>
    </div>
  );
}