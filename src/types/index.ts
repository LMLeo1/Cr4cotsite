export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  youtubeId: string;
  publishedAt: string;
  duration: string;
  viewCount?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Milestone {
  id: string;
  date: string;
  title: string;
  description: string;
  icon: string;
  type: 'youtube' | 'project' | 'personal' | 'achievement';
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  color: string;
  followers?: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  creator: string;
  keywords: string[];
}