import React, { useEffect, useState } from 'react';
import Comment from './SingleComment';

function DisplayComments(props) {

  const [data, setData] = useState([])

  useEffect(() => {
    if (props.selectedCard.id != undefined) {
      setData((props.selectedCard.comments).sort((a, b) => a.published_at < b.published_at ? 1 : -1))
    }
  }, [props.selectedCard])

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