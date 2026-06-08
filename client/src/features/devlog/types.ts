export interface DevLogEntry {
  id: string;
  title: string;
  summary: string;
  content: string;
  tags: string[];
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateDevLogInput {
  title: string;
  summary: string;
  content: string;
  tags?: string[];
  published?: boolean;
}
