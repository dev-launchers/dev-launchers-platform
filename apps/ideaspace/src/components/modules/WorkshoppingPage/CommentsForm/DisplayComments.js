import React, { useEffect, useState } from 'react';
import Comment from './SingleComment';
import { agent } from '@devlaunchers/utility';
import { cleanData, cleanDataList } from '../../../../utils/StrapiHelper';

function DisplayComments(props) {

  const [data, setData] = useState([]);

  useEffect(async () => {
    if (props.selectedCard.id != undefined) {

      const data = await agent.Ideas
      .getIdea(props.selectedCard.id, new URLSearchParams(`populate=*`));

      const card = cleanData(data);

      card.comments = card.comments ? cleanDataList(card.comments?.data) : card.comments;

      if (card.comments){
        setData((card.comments).sort((a, b) => a.published_at < b.published_at ? 1 : -1));
      }
    }
  }, [props.selectedCard]);

  const commentNodes = data.map(comment => (
    <Comment author={comment.author} key={comment.id} id={comment.id}>
      {comment.text}
    </Comment>
  ));
  return (
    <div>
      {data.length ? commentNodes : <div style={{padding:"2rem"}}>No comments yet!</div>}
    </div>
  );
};

export default DisplayComments;