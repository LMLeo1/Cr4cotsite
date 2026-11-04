import { navItems, socialLinks, siteConfig } from '../../data/site';
import { IconGithub, IconTwitter, IconLinkedin, IconDiscord, IconYoutube, IconMail, IconArrowUpRight } from '../ui/Icons';
import { Link } from '../ui';

const socialIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  youtube: IconYoutube,
  github: IconGithub,
  twitter: IconTwitter,
  linkedin: IconLinkedin,
  discord: IconDiscord,
  mail: IconMail,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-elevated/30" role="contentinfo">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#home" className="font-display text-2xl md:text-3xl font-bold text-text text-gradient-primary" aria-label="Cr4cot - Accueil">
              Cr4cot
            </a>
            <p className="mt-4 text-text-muted max-w-sm">
              {siteConfig.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.filter(s => s.id !== 'email').map((social) => {
                const Icon = socialIcons[social.id];
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-text-muted hover:text-text transition-colors group"
                    style={{ backgroundColor: `${social.color}15` }}
                    aria-label={social.name}
                  >
                    <span style={{ color: social.color }} className="group-hover:scale-110 transition-transform">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <nav aria-label="Navigation du site">
            <h3 className="font-medium text-text mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navItems.slice(1).map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-text-muted hover:text-primary transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-medium text-text mb-4">Contact</h3>
            <address className="not-italic space-y-2 text-text-muted text-sm">
              <a href="mailto:contact@cr4cot.fr" className="hover:text-primary transition-colors flex items-center gap-2">
                <IconMail size={16} aria-hidden="true" />
                contact@cr4cot.fr
              </a>
              <p>Disponible pour freelance, collaborations et opportunités.</p>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-subtle text-sm">
            © {currentYear} {siteConfig.name}. Tous droits réservés.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#home"
              className="text-text-subtle hover:text-primary transition-colors text-sm"
            >
              Mentions légales
            </a>
            <a
              href="#home"
              className="text-text-subtle hover:text-primary transition-colors text-sm"
            >
              Politique de confidentialité
            </a>
            <Link
              variant="ghost"
              size="sm"
              href="#home"
              className="text-text-subtle hover:text-primary"
            >
              <IconArrowUpRight size={16} aria-hidden="true" />
              Haut de page
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}