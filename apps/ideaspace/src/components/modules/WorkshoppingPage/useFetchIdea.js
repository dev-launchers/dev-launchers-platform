import { useState, useEffect } from 'react';
import axios from 'axios';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';


export const useFetchIdea = (ideaId) => {
  let { userData, setUserData, isAuthenticated } = useUserDataContext();
  if (process.env.NEXT_PUBLIC_NAME == 'DEVELOPMENT') {
    useEffect(() => {
      setUserData({ ...userData, id: 30 });
    }, []);
  }

  const [hidden, setHidden] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    ideaName: '',
    discord: '',
    description: '',
    email: '',
    created_at: '',
    comments: [],
    author: {},
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

  useEffect(() => {
    const fetchIdea = async (ideaId) => {
      setLoading(true)
      const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards/${ideaId}`);
      setLoading(false)
      if (response.data) {
        setSourceData(response.data);
      }
    } 
    try {
      if (ideaId) {
        fetchIdea(ideaId)
      }
    } catch(error) {
      console.log(error)
    }
  }, [ideaId, setLoading, setData]);

  useEffect(() => {
    if (sourceData.status == "archived" && sourceData.author.id !== userData.id) {
      setHidden(true);
    } else {
      setData(sourceData);
    }
  }, [sourceData, userData]);

  return { data, loading, hidden };
};
