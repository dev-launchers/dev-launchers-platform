import { useState, useEffect } from 'react';
import axios from 'axios';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';

export const useFetchIdea = (ideaId) => {
  let { userData, updateUserData, isAuthenticated } = useUserDataContext();
  if (process.env.NEXT_PUBLIC_NAME == 'DEVELOPMENT') {
    useEffect(() => {
      updateUserData({ ...userData, id: 30 });
    }, []);
  }

  const [hidden, setHidden] = useState(false);
  const [getError, setGetError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    ideaName: '',
    discord: '',
    description: '',
    email: '',
    created_at: '',
    comments: [],
    author: {},
    difficultyLevel: '',
    ideaOwner: '',
  });
  const [sourceData, setSourceData] = useState({
    ideaName: '',
    discord: '',
    description: '',
    email: '',
    created_at: '',
    comments: [],
    author: {},
  });

  useEffect(async () => {
    try {
      if (ideaId) {
        setLoading(true)
        const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards/${ideaId}`);
        setLoading(false)
        if (response.data) {
          setSourceData(response.data);
        }
      }
    } catch (error) {
      console.log(error)
      setGetError(true);
    }
  }, [ideaId, setLoading, setData]);

  useEffect(() => {
    if (sourceData.status == "archived" && sourceData.author.id !== userData.id) {
      setHidden(true);
    } else {
      setData(sourceData);
    }
  }, [sourceData, userData]);

  return { data, loading, hidden, getError };
};
