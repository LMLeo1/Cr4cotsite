import { projects } from '../../data/site';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui';
import { Badge } from '../ui';
import { Link } from '../ui';
import { IconGithub, IconExternalLink, IconStar } from '../ui/Icons';
import { useScrollAnimation } from '../../hooks';

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <Card
      ref={ref}
      variant="interactive"
      className={`group overflow-hidden ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="aspect-video bg-bg-elevated relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            {project.githubUrl && (
              <Link
                variant="ghost"
                size="sm"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Voir le code de ${project.title} sur GitHub`}
                className="bg-bg/90 backdrop-blur border-border-light"
              >
                <IconGithub size={18} aria-hidden="true" />
              </Link>
            )}
            {project.liveUrl && (
              <Link
                variant="primary"
                size="sm"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Voir la démo de ${project.title}`}
                className="bg-bg/90 backdrop-blur"
              >
                <IconExternalLink size={18} aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage: `url(${project.image})`,
          }}
          aria-hidden="true"
        />
        {project.featured && (
          <div className="absolute top-3 left-3">
            <Badge variant="primary" size="sm">
              <IconStar size={10} className="mr-1" aria-hidden="true" />
              Mis en avant
            </Badge>
          </div>
        )}
      </div>

      <CardHeader className="p-5 pt-5 pb-0">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="outline" size="sm">
            {project.tags[0]}
          </Badge>
          {project.tags.length > 1 && (
            <Badge variant="outline" size="sm">
              +{project.tags.length - 1}
            </Badge>
          )}
        </div>
        <CardTitle className="text-lg group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="px-5 pb-2">
        <CardDescription className="line-clamp-3 text-base">
          {project.description}
        </CardDescription>
      </CardContent>

      <CardFooter className="px-5 pb-5 flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" size="sm" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        {project.githubUrl && (
          <Link
            variant="ghost"
            size="sm"
            iconRight
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200"
            aria-label={`Code source de ${project.title}`}
          >
            Code
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}

export function Projects() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="projects"
      className="section bg-bg-elevated/30"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <h2
            id="projects-title"
            className="section-title"
          >
            Mes projets
          </h2>
          <p className="section-subtitle mx-auto">
            Applications, outils et bibliothèques que j'ai développés. La plupart sont open-source sur GitHub.
          </p>
        </div>

        <div
          className={`grid gap-6 ${isVisible ? '' : 'opacity-0'}`}
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          }}
          role="list"
          aria-label="Liste des projets"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div
          className={`mt-12 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '300ms' }}
        >
          <Link variant="secondary" iconRight icon="arrowUpRight" href="https://github.com/cr4cot" target="_blank" rel="noopener noreferrer">
            Voir tout sur GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}