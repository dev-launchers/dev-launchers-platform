import React, { useEffect, useState } from 'react';
import Comment from './SingleComment';
// import { agent } from '@devlaunchers/utility';
import { cleanDataList } from '../../../../utils/StrapiHelper';

function DisplayComments({ selectedCard }) {

  // const [data, setData] = useState([]);

  // useEffect(async () => {
  //   if (props.selectedCard.id != undefined) {

  //     const data = await agent.Ideas
  //     .getIdea(props.selectedCard.id, new URLSearchParams(`populate=*`));
  //     const card = cleanData(data);
  //     card.comments = card.comments ? cleanDataList(card.comments?.data) : card.comments;

  //     if (card.comments){
  //       setData((card.comments).sort((a, b) => a.published_at < b.published_at ? 1 : -1));
  //     }
  //   }
  // }, [props.selectedCard]);
  const comments = selectedCard.comments ? cleanDataList(selectedCard.comments.data) : [];
  const sortedComments = comments.length ? comments.sort((a, b) => a.published_at < b.published_at ? 1 : -1) : [];
  
  if (!sortedComments.length) {
    return (
      <div style={{padding:"2rem"}}>No comments yet!</div>
    );
  }
  return (
    <div>
      {sortedComments.map((comment) => (
        <Comment author={comment.author} key={comment.id} id={comment.id}>
          {comment.text}
        </Comment>
      ))}
    </div>
  );
};

export default DisplayComments;