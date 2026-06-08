export interface CreateProjectInput {
  title: string;
  slug: string;
  description: string;
  techStack: string[];
  featured: boolean;
  published: boolean;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  sortOrder?: number;
}

export interface UpdateProjectInput extends Partial<CreateProjectInput> {}
