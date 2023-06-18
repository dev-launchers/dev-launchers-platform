import { useState, useEffect } from 'react';
import { agent } from '@devlaunchers/utility';
import { cleanData } from '../../../utils/StrapiHelper';

export const useFetchIdea = (ideaId) => {
  let { userData, setUserData, isAuthenticated } = useUserDataContext();
  if (process.env.NEXT_PUBLIC_NAME == 'DEVELOPMENT') {
    useEffect(() => {
      setUserData({ ...userData, id: 30 });
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
  useEffect(() => {
    const fetchIdea = async (ideaId) => {
      setLoading(true)

      const res = cleanData(await agent.Ideas.getIdea(ideaId, 
        new URLSearchParams(`populate=*`)));

      setLoading(false)
      if (res) {
        setData(res)
      }
    } 
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
