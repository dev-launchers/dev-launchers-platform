import { IdeaSkill } from './ideaSkill';
import { Position } from './position';
import { User } from './user';
import { Comment } from './comment';

export interface Idea {
    id: string;
    ideaName: string;
    tagline: string;
    description: string;
    targetAudience: string;
    skills: IdeaSkill[];
    openPositions: Position[];
    author: User;
    difficultyLevel: number;
    comment: Comment[];
    discord: string;
    email: string;
    calendly: string;
    features: string;
    experience: string;
}