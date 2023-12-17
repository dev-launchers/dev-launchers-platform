import React, { useEffect, useState } from 'react';
import Comment from './SingleComment';
import { cleanDataList } from '../../../../utils/StrapiHelper';
import axios from 'axios';

//create your forceUpdate hook
function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update state to force render
  // A function that increment 👆🏻 the previous state like here 
  // is better than directly setting `setValue(value + 1)`
}

function DisplayComments(props) {
  console.log(props);

  // call your hook here
  // const forceUpdate = useForceUpdate();

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   console.log(props.comments)
  //   if (typeof this !== 'undefined') {
  //     // refresh the comment feed to show the new comment
  //     this.forceUpdate();
  //   }
  // }, [props.comments]);

  // useEffect(() => {
  //   if (props.selectedCard.id != undefined) {
  //     axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards/${props.selectedCard.id}?populate=deep`)
  //       .then(response => {
  //         const responseData = cleanDataList(response.data.data.attributes.comments.data).sort((a, b) => {
  //           const dateA = new Date(a.publishedAt);
  //           const dateB = new Date(b.publishedAt);
  //           if (dateA < dateB) {
  //             return 1;
  //           }
  //           if (dateA > dateB) {
  //             return -1;
  //           }

  //           // dates must be equal
  //           return 0;
  //         });
  //         setData((responseData));
  //     });
  //   }
  // }, [props.selectedCard]);

  const commentNodes = props.comments.map(comment => {
    return <Comment author={comment.author} key={comment.id} id={comment.id} createdAt={comment.createdAt} publishedAt={comment.publishedAt} updatedAt={comment.updatedAt}>
      {comment.text}
    </Comment>
  });

  return (
    <div>
      {props.comments.length ? commentNodes : <div style={{ padding: "2rem" }}>No comments yet!</div>}
    </div>
  );
};

export default DisplayComments;