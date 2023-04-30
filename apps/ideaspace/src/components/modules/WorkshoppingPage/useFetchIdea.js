import { useState, useEffect } from 'react';
import axios from 'axios';


export const useFetchIdea = (ideaId) => {
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
      const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards/${ideaId}`);
      setLoading(false)
      if (response.data) {
        setData(response.data)
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
  return { data, loading };
};
