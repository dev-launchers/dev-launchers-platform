import React from 'react';
import { agent } from '@devlaunchers/utility';

export default function useUser() {
  const [user, setUserData] = React.useState();
  const [isAuthenticated, setIsAuthenticated] = React.useState();
  React.useEffect(() => {
    agent.User.get();
    console.log(agent.User.get());
  }, []);
}


const DEFAULT_USER = {
  id: 0,
  name: '',
  username: '',
  email: '',
  bio: '',
  profilePictureUrl: '',
  socialMediaLinks: [],
  totalPoints: 0,
  totalSeasonPoints: 0,
  availablePoints: 0,
  volunteerHours: 0,
  discord: {
    id: 0,
    avatar: '',
    username: '',
    discriminator: '',
  },
  interests: [],
};

React.useContext(DEFAULT_USER);
