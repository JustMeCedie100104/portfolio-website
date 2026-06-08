export interface CreateDevLogInput {
  title: string;
  slug: string;
  summary: string;
  content: string;
  tags: string[];
  published: boolean;
}

export interface UpdateDevLogInput extends Partial<CreateDevLogInput> {}
