import React, { useEffect, useState } from 'react';
import Comment from './SingleComment';
import { agent } from '@devlaunchers/utility';
import { cleanData, cleanDataList } from '../../../../utils/StrapiHelper';

//create your forceUpdate hook
function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update state to force render
  // A function that increment 👆🏻 the previous state like here 
  // is better than directly setting `setValue(value + 1)`
}

function DisplayComments(props) {

  const [comments, setComments] = useState([]); // the data for the comments array; setComments updates comment and triggers a re-render

  // call your hook here
  const forceUpdate = useForceUpdate();

  useEffect(async () => {
    if (props.selectedCard.id != undefined) {

      const data = await agent.Ideas
      .getIdea(props.selectedCard.id, new URLSearchParams(`populate=*`));

      const card = cleanData(data);

      card.comments = card.comments ? cleanDataList(card.comments?.data) : card.comments;

      if (card.comments){
        setComments((card.comments).sort((a, b) => a.published_at < b.published_at ? 1 : -1));
        // refresh the feed to show the new comment!
        
      }
    }
  }, [props.selectedCard]);

  const commentNodes = comments.map(comment => (
    <Comment author={comment.author} key={comment.id} id={comment.id}>
      {comment.text}
    </Comment>
  ));
  return (
    <div>
      {comments.length ? commentNodes : <div style={{padding:"2rem"}}>No comments yet!</div>}
    </div>
  );
};

export default DisplayComments;