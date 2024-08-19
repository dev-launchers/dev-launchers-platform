import { SkillLevel } from "./level";
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
  id?: string;
  project?: string;
  level: keyof typeof SkillLevel;
}
