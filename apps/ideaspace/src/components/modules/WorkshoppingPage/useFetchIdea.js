import { useState, useEffect } from 'react';
import { agent } from '@devlaunchers/utility';
import { cleanData } from '../../../utils/StrapiHelper';

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
        fetchIdea(ideaId)
      }
    } catch(error) {
      console.log(error)
    }
  }, [ideaId, setLoading, setData]);
  return { data, loading };
};
