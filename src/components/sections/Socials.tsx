import { socialLinks } from '../../data/site';
import { Card } from '../ui';
import { Link } from '../ui';
import { IconYoutube, IconGithub, IconTwitter, IconLinkedin, IconDiscord, IconMail } from '../ui/Icons';
import { useScrollAnimation } from '../../hooks';

const socialIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  youtube: IconYoutube,
  github: IconGithub,
  twitter: IconTwitter,
  linkedin: IconLinkedin,
  discord: IconDiscord,
  mail: IconMail,
};

interface SocialCardProps {
  social: typeof socialLinks[0];
  index: number;
}

function SocialCard({ social, index }: SocialCardProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const Icon = socialIcons[social.id] || IconMail;

  return (
    <Card
      ref={ref}
      variant="interactive"
      className={`group p-6 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:scale-110`}
          style={{ backgroundColor: `${social.color}20` }}
        >
          <span style={{ color: social.color }}>
            <Icon size={26} aria-hidden="true" />
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-lg font-bold text-text group-hover:text-primary transition-colors">
            {social.name}
          </h3>
          {social.followers && (
            <p className="text-text-muted text-sm mt-0.5">{social.followers} abonnés</p>
          )}
        </div>
        <Link
          variant="ghost"
          size="sm"
          iconRight
          icon="arrowUpRight"
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 text-text-muted hover:text-text"
          aria-label={social.name === 'Email' ? `Envoyer un email à ${social.url.replace('mailto:', '')}` : `Voir mon profil ${social.name}`}
        >
          {social.name === 'Email' ? 'Écrire' : 'Suivre'}
        </Link>
      </div>
    </Card>
  );
}

export function Socials() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="socials"
      className="section bg-bg-elevated/30"
      aria-labelledby="socials-title"
    >
      <div className="container">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <h2
            id="socials-title"
            className="section-title"
          >
            Me suivre
          </h2>
          <p className="section-subtitle mx-auto">
            Retrouvez-moi sur mes différentes plateformes pour ne rien manquer.
          </p>
        </div>

        <div
          className={`grid gap-4 md:grid-cols-2 lg:grid-cols-3 ${isVisible ? '' : 'opacity-0'}`}
          role="list"
          aria-label="Réseaux sociaux"
        >
          {socialLinks.map((social, index) => (
            <SocialCard key={social.id} social={social} index={index} />
          ))}
        </div>

        <div
          className={`mt-12 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '300ms' }}
        >
          <p className="text-text-muted">
            Pour les demandes professionnelles, utilisez le formulaire de contact ou envoyez un email directement.
          </p>
        </div>
      </div>
    </section>
  );
}