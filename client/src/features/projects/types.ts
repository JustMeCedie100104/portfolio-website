export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  techStack: string[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  createdAt: string;
}
