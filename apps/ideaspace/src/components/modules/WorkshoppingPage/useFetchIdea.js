import { useState, useEffect } from 'react';
<<<<<<< HEAD
import axios from 'axios';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
=======
import { agent } from '@devlaunchers/utility';
import { cleanData } from '../../../utils/StrapiHelper';
>>>>>>> c5ef5fae273c4026dad7da3e657f2a3249157fdf

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
<<<<<<< HEAD
  const [sourceData, setSourceData] = useState({
    ideaName: '',
    discord: '',
    description: '',
    email: '',
    created_at: '',
    comments: [],
    author: {},
  });

  // The data is NOT changing in the useEffect hook in useFetchIdea.js, so something in the request to the API is NOT going through.
  // useEffect is NOT being called, otherwise we’d see the idea ID from the URL of the workshopping page in the console.
  // Why is ideaId undefined?
  useEffect(async () => {
=======
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
>>>>>>> c5ef5fae273c4026dad7da3e657f2a3249157fdf
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
