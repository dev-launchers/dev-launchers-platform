export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  bio: string;
  profilePictureUrl: string;
  socialMediaLinks: string[];
  totalPoints: number;
  totalSeasonPoints: number;
  availablePoints: number;
  volunteerHours: number;
  discord: {
    id: number;
    avatar: string;
    username: string;
    discriminator: string;
  };
}
