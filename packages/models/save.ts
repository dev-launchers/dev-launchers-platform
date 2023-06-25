import { User } from './user';

export interface Save {
    objectId: string;
    objectType: string;
    user: User;
}