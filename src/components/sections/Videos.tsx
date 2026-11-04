import { videos } from '../../data/site';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui';
import { Badge } from '../ui';
import { Button, Link } from '../ui';
import { IconPlay, IconClock, IconEye, IconYoutube, IconArrowUpRight } from '../ui/Icons';
import { useScrollAnimation } from '../../hooks';
import { useState } from 'react';

interface VideoCardProps {
  video: typeof videos[0];
  index: number;
}

function VideoCard({ video, index }: VideoCardProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const [isHovered, setIsHovered] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <Card
      ref={ref}
      variant="interactive"
      className={`group overflow-hidden ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video bg-bg-elevated overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            variant="primary"
            size="lg"
            className="opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300"
            aria-label={`Regarder "${video.title}"`}
          >
            <IconPlay size={28} aria-hidden="true" />
          </Button>
        </div>
        <div className="absolute bottom-3 right-3 bg-bg/90 backdrop-blur text-xs font-medium text-text px-2 py-1 rounded">
          {video.duration}
        </div>
        <div
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 ${
            isHovered ? 'scale-105' : ''
          }`}
          style={{
            backgroundImage: `url(${video.thumbnail})`,
          }}
          aria-hidden="true"
        />
      </div>

      <CardHeader className="p-5 pt-5 pb-0">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="primary" size="sm">
            <IconYoutube size={12} className="mr-1" aria-hidden="true" />
            YouTube
          </Badge>
          <span className="text-xs text-text-subtle">{formatDate(video.publishedAt)}</span>
        </div>
        <CardTitle className="text-lg group-hover:text-primary transition-colors">
          {video.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="px-5 pb-2">
        <CardDescription className="line-clamp-3 text-base">
          {video.description}
        </CardDescription>
      </CardContent>

      <CardFooter className="px-5 pb-5 flex items-center justify-between">
        <div className="flex items-center gap-4 text-xs text-text-subtle">
          <span className="flex items-center gap-1">
            <IconEye size={14} aria-hidden="true" />
            {video.viewCount}
          </span>
          <span className="flex items-center gap-1">
            <IconClock size={14} aria-hidden="true" />
            {video.duration}
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          iconRight
          className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200"
          aria-label={`Voir la vidéo "${video.title}" sur YouTube`}
        >
          Regarder
          <IconArrowUpRight size={14} aria-hidden="true" />
        </Button>
      </CardFooter>
    </Card>
  );
}

export function Videos() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="videos"
      className="section bg-bg-elevated/30"
      aria-labelledby="videos-title"
    >
      <div className="container">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <h2
            id="videos-title"
            className="section-title"
          >
            Mes vidéos
          </h2>
          <p className="section-subtitle mx-auto">
            Retrouvez tout mon contenu tech : tutoriels, revues de code, découvertes et réflexions sur le développement.
          </p>
        </div>

        <div
          className={`grid gap-6 ${isVisible ? '' : 'opacity-0'}`}
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          }}
          role="list"
          aria-label="Liste des vidéos"
        >
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>

        <div
          className={`mt-12 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '300ms' }}
        >
          <Link variant="secondary" iconRight icon="arrowUpRight" href="https://youtube.com/@cr4cot" target="_blank" rel="noopener noreferrer">
            Voir la chaîne YouTube
          </Link>
        </div>
      </div>
    </section>
  );
}