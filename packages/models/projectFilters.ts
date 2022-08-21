import { SkillLevel } from "./level";

export interface ProjectParams {
    projectType: string[];
    opportunity: string[] | null;
    level: SkillLevel[] | null;
    maxCommit: number;
    searchTerm: string | null;
}