import type { Video, Project, Milestone, SocialLink, NavItem, SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  name: 'Cr4cot',
  tagline: 'Créateur de contenu • Développeur • Passionné',
  description: 'Site officiel de Cr4cot - Créateur de contenu tech, développeur et passionné d\'innovation. Découvrez mes vidéos, projets et parcours.',
  url: 'https://cr4cot.fr',
  ogImage: '/og-image.jpg',
  creator: 'Cr4cot',
  keywords: ['Cr4cot', 'créateur de contenu', 'développeur', 'tech', 'YouTube', 'programmation', 'projets', 'portfolio'],
};

export const navItems: NavItem[] = [
  { id: 'home', label: 'Accueil', href: '#home' },
  { id: 'videos', label: 'Vidéos', href: '#videos' },
  { id: 'about', label: 'À propos', href: '#about' },
  { id: 'projects', label: 'Projets', href: '#projects' },
  { id: 'milestones', label: 'Parcours', href: '#milestones' },
  { id: 'socials', label: 'Réseaux', href: '#socials' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const videos: Video[] = [
  {
    id: '1',
    title: 'Bientôt disponible',
    description: 'Une nouvelle vidéo arrive très bientôt. Abonnez-vous pour ne pas la manquer !',
    thumbnail: '/placeholder-video-1.jpg',
    youtubeId: 'dQw4w9WgXcQ',
    publishedAt: '2024-01-15',
    duration: '12:34',
    viewCount: '1.2K',
  },
  {
    id: '2',
    title: 'Projet en cours',
    description: 'Travail sur un nouveau projet passionnant. Restez connectés pour la suite.',
    thumbnail: '/placeholder-video-2.jpg',
    youtubeId: 'dQw4w9WgXcQ',
    publishedAt: '2024-01-10',
    duration: '8:56',
    viewCount: '890',
  },
  {
    id: '3',
    title: 'Tutoriel à venir',
    description: 'Un tutoriel complet en préparation. Suivez la chaîne pour être notifié.',
    thumbnail: '/placeholder-video-3.jpg',
    youtubeId: 'dQw4w9WgXcQ',
    publishedAt: '2024-01-05',
    duration: '15:22',
    viewCount: '2.1K',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Projet Alpha',
    description: 'Une application web moderne construite avec React et TypeScript.',
    longDescription: 'Projet Alpha est une application full-stack démontrant les meilleures pratiques de développement moderne avec une architecture propre, des tests complets et un déploiement CI/CD.',
    image: '/placeholder-project-1.jpg',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/cr4cot',
    liveUrl: 'https://cr4cot.fr',
    featured: true,
  },
  {
    id: '2',
    title: 'Outil Beta',
    description: 'Un CLI puissant pour automatiser les tâches de développement quotidiennes.',
    longDescription: 'Outil Beta simplifie le workflow des développeurs en automatisant les tâches répétitives comme la génération de code, la configuration de projets et le déploiement.',
    image: '/placeholder-project-2.jpg',
    tags: ['Go', 'CLI', 'Automation', 'Docker'],
    githubUrl: 'https://github.com/cr4cot',
    featured: true,
  },
  {
    id: '3',
    title: 'Bibliothèque Gamma',
    description: 'Une bibliothèque de composants UI réutilisables et accessibles.',
    longDescription: 'Bibliothèque Gamma fournit un ensemble de composants React prêts à l\'emploi, entièrement typés, accessibles et personnalisables pour accélérer le développement d\'interfaces utilisateur.',
    image: '/placeholder-project-3.jpg',
    tags: ['React', 'TypeScript', 'Tailwind', 'Storybook'],
    githubUrl: 'https://github.com/cr4cot',
    featured: false,
  },
  {
    id: '4',
    title: 'Dashboard Delta',
    description: 'Tableau de bord analytique temps réel pour surveiller les métriques.',
    longDescription: 'Dashboard Delta offre une visualisation en temps réel des données avec des graphiques interactifs, des alertes configurables et une API flexible pour l\'intégration.',
    image: '/placeholder-project-4.jpg',
    tags: ['Vue.js', 'D3.js', 'WebSocket', 'Redis'],
    githubUrl: 'https://github.com/cr4cot',
    liveUrl: 'https://cr4cot.fr',
    featured: false,
  },
];

export const milestones: Milestone[] = [
  {
    id: '1',
    date: '2024',
    title: 'Lancement de la chaîne YouTube',
    description: 'Première vidéo publiée, début de l\'aventure de création de contenu tech.',
    icon: 'youtube',
    type: 'youtube',
  },
  {
    id: '2',
    date: '2024',
    title: '1 000 abonnés',
    description: 'Premier palier majeur atteint, la communauté commence à grandir.',
    icon: 'users',
    type: 'achievement',
  },
  {
    id: '3',
    date: '2024',
    title: 'Premier projet open-source populaire',
    description: 'Sortie d\'un outil qui a attiré l\'attention de la communauté développeur.',
    icon: 'github',
    type: 'project',
  },
  {
    id: '4',
    date: '2023',
    title: 'Début du développement',
    description: 'Premiers pas dans le code, apprentissage autodidacte et passion naissante.',
    icon: 'code',
    type: 'personal',
  },
];

export const socialLinks: SocialLink[] = [
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://youtube.com/@cr4cot',
    icon: 'youtube',
    color: '#FF0000',
    followers: '1.2K',
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/cr4cot',
    icon: 'github',
    color: '#FFFFFF',
    followers: '500+',
  },
  {
    id: 'twitter',
    name: 'X (Twitter)',
    url: 'https://x.com/cr4cot',
    icon: 'twitter',
    color: '#FFFFFF',
    followers: '800+',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/cr4cot',
    icon: 'linkedin',
    color: '#0A66C2',
    followers: '300+',
  },
  {
    id: 'discord',
    name: 'Discord',
    url: 'https://discord.gg/cr4cot',
    icon: 'discord',
    color: '#5865F2',
    followers: '200+',
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:contact@cr4cot.fr',
    icon: 'mail',
    color: '#A855F7',
  },
];