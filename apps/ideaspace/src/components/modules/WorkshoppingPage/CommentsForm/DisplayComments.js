import React, { useEffect, useState } from 'react';
import Comment from './SingleComment';
import { agent } from '@devlaunchers/utility';
import { cleanData, cleanDataList } from '../../../../utils/StrapiHelper';
import axios from 'axios';

//create your forceUpdate hook
function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update state to force render
  // A function that increment 👆🏻 the previous state like here 
  // is better than directly setting `setValue(value + 1)`
}

function DisplayComments(props) {

  // call your hook here
  // const forceUpdate = useForceUpdate();

  const [data, setData] = useState([]);

  console.log("props: ", props)

  useEffect(() => {
    if (typeof this !== 'undefined') {
      // refresh the comment feed to show the new comment
      this.forceUpdate();
    }
  }, [props.comments]);

  const commentNodes = props.comments.map(comment => (
    <Comment author={comment.author} key={comment.id} id={comment.id} createdAt={comment.createdAt} publishedAt={comment.publishedAt} updatedAt={comment.updatedAt}>
      {comment.text}
    </Comment>
  ));
  return (
    <div>
      {props.comments.length ? commentNodes : <div style={{padding:"2rem"}}>No comments yet!</div>}
    </div>
  );
};

export default DisplayComments;