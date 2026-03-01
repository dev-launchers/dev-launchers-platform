export interface Skill {
  id: number;
  attributes: {
    interest: string;
    category: string;
    createdAt: string;
    publishedAt: string | null;
    updatedAt: string;
    projects: {
      data: Array<{
        id: number;
        attributes?: Record<string, any>;
      }>;
    };
  };
}
