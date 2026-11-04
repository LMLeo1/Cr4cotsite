import { milestones } from '../../data/site';
import { Card } from '../ui';
import { IconYoutube, IconGithub, IconUsers, IconAward, IconCode, IconRocket } from '../ui/Icons';
import { useScrollAnimation } from '../../hooks';

const milestoneIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  youtube: IconYoutube,
  github: IconGithub,
  users: IconUsers,
  achievement: IconAward,
  personal: IconCode,
  project: IconRocket,
};

const milestoneColors: Record<string, string> = {
  youtube: 'bg-red-500/20 text-red-400 border-red-500/30',
  github: 'bg-gray-300/20 text-gray-300 border-gray-300/30',
  users: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  achievement: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  personal: 'bg-primary/20 text-primary border-primary/30',
  project: 'bg-green-500/20 text-green-400 border-green-500/30',
};

interface MilestoneItemProps {
  milestone: typeof milestones[0];
  index: number;
  isLast: boolean;
}

function MilestoneItem({ milestone, index, isLast }: MilestoneItemProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const Icon = milestoneIcons[milestone.type] || IconCode;
  const colorClass = milestoneColors[milestone.type] || milestoneColors.personal;

  return (
    <div ref={ref} className={`relative ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-x-8'}`} style={{ animationDelay: `${index * 150}ms` }}>
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-border to-transparent" aria-hidden="true">
        {isLast && <div className="absolute bottom-0 left-0 w-full h-1/2 bg-bg" />}
      </div>

      <div className="relative pl-16 pb-12 last:pb-0">
        <div className="absolute left-0 top-1">
          <div className={`w-3 h-3 rounded-full border-4 ${colorClass} relative z-10`} aria-hidden="true">
            <div className="absolute inset-0 rounded-full bg-current opacity-20 animate-ping" aria-hidden="true" />
          </div>
        </div>

        <Card variant="elevated" padding="md" className="bg-bg-card/50 border-border/50">
          <div className="flex items-start gap-4">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${colorClass}`}>
              <Icon size={20} aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-sm text-primary font-medium">{milestone.date}</span>
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${colorClass}`}>
                  {milestone.type.charAt(0).toUpperCase() + milestone.type.slice(1)}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-text mb-1">{milestone.title}</h3>
              <p className="text-text-muted text-sm">{milestone.description}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export function Milestones() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="milestones"
      className="section"
      aria-labelledby="milestones-title"
    >
      <div className="container">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <h2
            id="milestones-title"
            className="section-title"
          >
            Mon parcours
          </h2>
          <p className="section-subtitle mx-auto">
            Les étapes clés qui ont façonné mon parcours de créateur et de développeur.
          </p>
        </div>

        <div
          className={`max-w-3xl mx-auto ${isVisible ? '' : 'opacity-0'}`}
          role="list"
          aria-label="Timeline des étapes importantes"
        >
          {milestones.map((milestone, index) => (
            <MilestoneItem
              key={milestone.id}
              milestone={milestone}
              index={index}
              isLast={index === milestones.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}