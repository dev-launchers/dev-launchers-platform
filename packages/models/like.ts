import { User } from './user';

export interface Like {
    objectId: string;
    objectType: string;
    user: User;
}