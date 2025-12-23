import Card from './../../../../common/Card';
import IdeaCard from './IdeaCard';
import AddIdeaCard from './AddIdeaCard';
import { agent } from '@devlaunchers/utility';
import { useEffect, useState } from 'react';

function Ideas({ ideasList }) {
  const [votesByIdea, setVotesByIdea] = useState({});

  useEffect(() => {
    let cancelled = false;

    const fetchVotes = async () => {
      if (!ideasList?.length) return;
      const entries = await Promise.all(
        ideasList.map(async (idea) => {
          try {
            const params = new URLSearchParams();
            params.set('populate', 'deep');
            params.append('filters[objectId][$eq]', idea.id.toString());
            const data = await agent.Likes.get(params);
            return [idea.id, data.length];
          } catch (error) {
            console.error('Failed to load votes for idea', idea.id, error);
            return [idea.id, 0];
          }
        })
      );

      if (!cancelled) {
        setVotesByIdea(Object.fromEntries(entries));
      }
    };

    fetchVotes();

    return () => {
      cancelled = true;
    };
  }, [ideasList]);

  return (
    <Card title="Ideas">
      <div className="flex flex-wrap gap-4 justify-start flex-row">
        {ideasList?.map((idea) => (
          <IdeaCard
            key={idea.id}
            idea={{ ...idea, votes: votesByIdea[idea.id] ?? 0 }}
          />
        ))}
        <AddIdeaCard />
      </div>
    </Card>
  );
}

export default Ideas;
