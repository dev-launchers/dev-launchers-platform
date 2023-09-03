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

  // const [comments, setComments] = useState([]); // the data for the comments array; setComments updates comment and triggers a re-render

  // call your hook here
  // const forceUpdate = useForceUpdate();

  const [data, setData] = useState([]);

  console.log("props: ", props)

  // useEffect(async () => {
  //   // if (props.selectedCard.id != undefined) {
  //   //   axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards/${props.selectedCard.id}`)
  //   //      .then(response => { // call backend
  //   //     console.log(response.data)
  //   //     setData((response.data.comments).sort((a, b) => a.published_at < b.published_at ? 1 : -1))

  //   //     const data = agent.Ideas // call backend AGAIN
  //   //     .getIdea(props.selectedCard.id, new URLSearchParams(`populate=*`));

  //   //     const card = cleanData(data);

  //   //     card.comments = card.comments ? cleanDataList(card.comments?.data) : card.comments;

  //   //     if (card.comments){
  //   //       setComments((card.comments).sort((a, b) => a.published_at < b.published_at ? 1 : -1));
  //   //       // refresh the feed to show the new comment!
          
  //   //     }
  //   //   })
  //   // }
  //   const data = agent.Ideas.getIdea(props.selectedCard.id, new URLSearchParams(`populate=*`));
  //   // console.log(data.comments)
  //   console.log("data from agent: ", data)

  //   const card = cleanData(data);

  //   card.comments = card.comments ? cleanDataList(card.comments?.data) : card.comments;

  //   if (card.comments){
  //     setComments((card.comments).sort((a, b) => a.published_at < b.published_at ? 1 : -1));
  //     // refresh the feed to show the new comment!
      
  //   }
  // }, [props.selectedCard]);

  useEffect(() => {
    if (typeof this !== 'undefined') {
      // refresh the comment feed to show the new comment
      this.forceUpdate();
    }
  }, [props.comments]);

  const commentNodes = props.comments.map(comment => (
    <Comment author={comment.author} key={comment.id} id={comment.id}>
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