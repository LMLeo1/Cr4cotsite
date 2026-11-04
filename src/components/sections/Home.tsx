import { Link } from '../ui';
import { IconPlay } from '../ui/Icons';
import { useScrollAnimation } from '../../hooks';

export function Home() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="home-title"
    >
      <div className="absolute inset-0 bg-gradient-radial" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-primary)/10_0%,transparent_70%)]" aria-hidden="true" />

      <div className="container relative z-10 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-elevated/50 border border-border backdrop-blur-sm animate-fade-in ${isVisible ? '' : 'opacity-0'}`}
            style={{ animationDelay: '100ms' }}
            aria-hidden="true"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm font-medium text-text-muted">Nouveau contenu chaque semaine</span>
          </div>

          <h1
            id="home-title"
            className={`mt-8 font-display font-bold text-text tracking-tight animate-slide-up ${isVisible ? '' : 'opacity-0'}`}
            style={{
              fontSize: 'clamp(3.5rem, 10vw, 8rem)',
              lineHeight: '1.05',
              letterSpacing: '-0.04em',
              animationDelay: '200ms',
            }}
          >
            Cr4cot
          </h1>

          <p
            className={`mt-6 text-lg md:text-xl text-text-muted max-w-2xl mx-auto animate-slide-up ${isVisible ? '' : 'opacity-0'}`}
            style={{ animationDelay: '300ms' }}
          >
            Créateur de contenu tech, développeur passionné et explorateur du code.
            Je partage mon parcours, mes projets et mes découvertes.
          </p>

          <div
            className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up ${isVisible ? '' : 'opacity-0'}`}
            style={{ animationDelay: '400ms' }}
          >
            <Link size="lg" iconRight href="#videos" className="w-full sm:w-auto">
              <IconPlay size={20} aria-hidden="true" />
              Découvrir mes vidéos
            </Link>
            <Link size="lg" variant="secondary" href="#projects" className="w-full sm:w-auto">
              Voir mes projets
            </Link>
          </div>

          <div
            className={`mt-16 flex items-center justify-center gap-8 md:gap-16 animate-fade-in ${isVisible ? '' : 'opacity-0'}`}
            style={{ animationDelay: '600ms' }}
            role="list"
            aria-label="Statistiques"
          >
            <div className="text-center" role="listitem">
              <div className="font-display text-3xl md:text-4xl font-bold text-text">1.2K+</div>
              <div className="text-sm text-text-muted mt-1">Abonnés YouTube</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent" aria-hidden="true" />
            <div className="text-center" role="listitem">
              <div className="font-display text-3xl md:text-4xl font-bold text-text">15+</div>
              <div className="text-sm text-text-muted mt-1">Vidéos publiées</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent" aria-hidden="true" />
            <div className="text-center" role="listitem">
              <div className="font-display text-3xl md:text-4xl font-bold text-text">8+</div>
              <div className="text-sm text-text-muted mt-1">Projets open-source</div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <svg
          className="w-6 h-6 text-text-muted"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}