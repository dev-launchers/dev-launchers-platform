import { useState, useEffect } from 'react';
import { agent } from '@devlaunchers/utility';
import { cleanData, cleanDataList } from '../../../utils/StrapiHelper';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';

export const useFetchIdea = (ideaId, setComments) => {
  let { userData } = useUserDataContext();

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

  // requests data from the backend
  useEffect(async () => {
    try {
      if (ideaId) {
        setLoading(true);

        const data = cleanData(
          await agent.Ideas.getIdea(
            ideaId,
            new URLSearchParams(
              `populate[ideaOwner][populate]&populate[author][populate]&populate[comments][populate][user][populate]=profile`
            )
          )
        );

        const commentResponse = data?.comments?.data;
        if (commentResponse !== undefined) {
          let cleanList = cleanDataList(commentResponse);
          cleanList.forEach((element) => {
            element.user = cleanData(element.user?.data);
            element.user.profile = cleanData(element.user?.profile.data);
          });
          setComments(cleanList);
        }

        const author = data?.author?.data;
        if (author !== undefined) {
          data.author = cleanData(author);
        }

        const ideaOwner = data?.ideaOwner?.data;
        if (ideaOwner !== undefined) {
          data.ideaOwner = cleanData(ideaOwner);
        }

        setLoading(false);

        if (data) {
          setSourceData(data);
        }
      }
    } catch (error) {
      console.log(error);
      setGetError(true);
    }
  }, [ideaId, setLoading, setData]);

  useEffect(() => {
    if (
      sourceData.status == 'archived' &&
      sourceData.author?.id !== userData.id
    ) {
      setHidden(true);
    } else {
      setData(sourceData);
    }
  }, [sourceData, userData]);

  return { data, loading, hidden, getError };
};
