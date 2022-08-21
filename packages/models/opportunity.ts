import { Expectation } from "./expectation";
import { SkillLevel } from "./level";
import { Skill } from "./skill";

export interface Opportunity {
    id: string;
    title: string;
    skills: Skill[];
    level: SkillLevel;
    commitmentHoursPerWeek: number;
    description: string;
    expectations: Expectation[];
    isHidden: boolean;
    published_at: Date;
    projects: Project[];
}

export interface Project {
    id: string;
    slug: string;
    catchPhrase: string;
    title: string;
    heroImage: string;
    vision: string;
    description: string;
    commitmentLevel: string;
    signupFormUrl: string;
    team: string;
    user: string;
    Images: string;
    interests: string[];
    calendarId: string;
    board: string;
    isListed: boolean;
    subProjects: string[];
    parentProject: string;
    google_meet: string;
    newMeetingTimes: string;
    opportunities: string[];
    isPlatform: boolean;
    published_at: string;
    created_by: string;
    updated_by: string;
}