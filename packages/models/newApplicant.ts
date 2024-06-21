import { SkillLevel } from './level';
export interface NewApplicant {
  discordUsername?: string;
  name: string;
  email: string;
  age: number;
  skills: {
    id?: string;
    skill: string;
  }[];
  commitment: number;
  extraInfo?: string;
  portfolioLink?: string;
  experience: string;
  reason: string;
  accepted: boolean;
  zip: number;
  role: string;
  project: { id: string; slug: string };
  //added newColumn of type media
  //media has all these attributes
  /*newColumn: //media;
  {
    data: [
      {
        id: string;
        attributes: {
          name: string;
          alternativeText: string;
          caption: string;
          width: number;
          height: number;
          formats: string;
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string;
          provider: string;
          provider_metadata: string;
          createdAt: string;
          updatedAt: string;
        };
      }
    ];
  };*/
  level: keyof typeof SkillLevel;
}
