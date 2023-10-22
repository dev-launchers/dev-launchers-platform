import React, { useEffect, useState } from 'react';
import Comment from './SingleComment';
import { agent } from '@devlaunchers/utility';
import { cleanData, cleanDataList } from '../../../../utils/StrapiHelper';
import axios from 'axios';

//create your forceUpdate hook
function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update state to force render
  // A function that increment 👆🏻 the previous state like here 
  // is better than directly setting `setValue(value + 1)`
}

function DisplayComments(props) {

  // call your hook here
  // const forceUpdate = useForceUpdate();

  const [data, setData] = useState([]);

  useEffect(() => {
    if (typeof this !== 'undefined') {
      // refresh the comment feed to show the new comment
      this.forceUpdate();
    }
  }, [props.comments]);

  useEffect(() => {
    if (props.selectedCard.id != undefined) {
      axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards/${props.selectedCard.id}?populate=deep`)
        .then(response => {
          console.log(response);
          console.log(response.data.data.attributes.comments.data);
          const responseData = cleanDataList(response.data.data.attributes.comments.data).sort((a, b) => {
            const dateA = new Date(a.publishedAt);
            const dateB = new Date(b.publishedAt);
            if (dateA < dateB) {
              return 1;
            }
            if (dateA > dateB) {
              return -1;
            }

            // dates must be equal
            return 0;
          });
          console.log("response data:", responseData);
            setData((responseData));
          });
    }
  }, [props.selectedCard]);

  console.log(data);

  const commentNodes = data.map(comment => {
    console.log(comment.publishedAt);
    return <Comment author={comment.author} key={comment.id} id={comment.id} createdAt={comment.createdAt} publishedAt={comment.publishedAt} updatedAt={comment.updatedAt}>
      {comment.text}
    </Comment>
  });

  return (
    <div>
      {data.length ? commentNodes : <div style={{ padding: "2rem" }}>No comments yet!</div>}
    </div>
  );
};

export default DisplayComments;

// From WorkshoppingPage/DisplayComments.js:
// import React, { useEffect, useState } from 'react';
// import Comment from './SingleComment';
// import axios from 'axios';

// export default function DisplayComments(props) {

//   const [data, setData] = useState([])

//   useEffect(() => {
//     if (props.selectedCard.id != undefined) {
//       axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards/${props.selectedCard.id}`)
//         .then(response => {
//           setData((response.data.comments).sort((a, b) => a.published_at < b.published_at ? 1 : -1))
//         })
//     }
//   }, [props.selectedCard])


//   const commentNodes = data.map(comment => (
//     <Comment author={comment.author} key={comment.id} id={comment.id}>
//       {comment.text}
//     </Comment>
//   ));
//   return (
//     <div>
//       {data.length ? commentNodes : <div style={{padding:"2rem"}}>No comments yet!</div>}
//     </div>
//   );
// };
