export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  bio: string;
  profilePictureUrl: string;
  socialMediaLinks: string[];
  discord: {
    id: number;
    avatar: string;
    username: string;
    discriminator: string;
  };
}
