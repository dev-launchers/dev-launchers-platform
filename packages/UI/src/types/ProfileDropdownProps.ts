export default interface ProfileDropdownProps {
  userData: {
    id: number;
    name: string;
    username: string;
    email: string;
    bio: string;
    profilePictureUrl: string;
    socialMediaLinks: never[];
    discord: {
      id: number;
      avatar: string;
      username: string;
      discriminator: string;
    };
    interests: never[];
  };
}
