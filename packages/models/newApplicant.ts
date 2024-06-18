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
  yearsExperience?: number;
  experience: string;
  reason: string;
  accepted: boolean;
  zip: number;
  role: string;
  project: { id: string; slug: string };
  level: keyof typeof SkillLevel;
}
