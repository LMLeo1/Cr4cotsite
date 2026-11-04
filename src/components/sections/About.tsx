import { Link } from '../ui';
import { IconCode, IconRocket, IconHeart, IconAward } from '../ui/Icons';
import { useScrollAnimation } from '../../hooks';

const features = [
  {
    icon: IconCode,
    title: 'Développement',
    description: 'Applications web modernes, APIs robustes et architectures scalables avec React, TypeScript, Node.js et plus.',
  },
  {
    icon: IconRocket,
    title: 'Création de contenu',
    description: 'Vidéos YouTube tech, tutoriels approfondis, revues de code et partage de découvertes techniques.',
  },
  {
    icon: IconHeart,
    title: 'Open Source',
    description: 'Contributions régulières, bibliothèques publiées et outils pour la communauté des développeurs.',
  },
  {
    icon: IconAward,
    title: 'Apprentissage continu',
    description: 'Veille technologique constante, expérimentation de nouveaux frameworks et partage des apprentissages.',
  },
];

export function About() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="about"
      className="section"
      aria-labelledby="about-title"
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={`order-2 md:order-1 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              À propos
            </span>
            <h2 id="about-title" className="section-title mb-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
              Créateur tech passionné,<br /> développeur par nature.
            </h2>
            <p className="text-text-muted text-lg mb-8 animate-slide-up" style={{ animationDelay: '300ms' }}>
              Je m'appelle Cr4cot. Je crée du contenu technique sur YouTube et je développe des projets open-source.
              Mon objectif : rendre le développement accessible, partager mes découvertes et construire des outils utiles.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '400ms' }}>
              <Link variant="secondary" href="#projects">
                Voir mes projets
              </Link>
              <Link variant="ghost" href="#contact">
                Me contacter
              </Link>
            </div>
          </div>

          <div
            className={`order-1 md:order-2 ${isVisible ? '' : 'opacity-0'} animate-fade-in`}
            style={{ animationDelay: '300ms' }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="card p-6 group"
                  style={{ animationDelay: `${index * 100 + 400}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-bg transition-colors duration-300">
                    <feature.icon size={28} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-text mb-2">{feature.title}</h3>
                  <p className="text-text-muted">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`mt-20 pt-16 border-t border-border ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '500ms' }}
        >
          <h3 className="font-display text-2xl font-bold text-text text-center mb-12">
            Mon stack technique
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'React', 'TypeScript', 'Node.js', 'Python', 'Go',
              'Tailwind CSS', 'PostgreSQL', 'Docker', 'Git', 'Linux',
              'Vite', 'Next.js', 'GraphQL', 'REST APIs', 'WebSocket',
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-bg-elevated border border-border text-text-muted hover:border-primary/50 hover:text-text transition-all duration-200 font-medium text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}