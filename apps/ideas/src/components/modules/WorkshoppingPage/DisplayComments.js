import React, { useEffect, useState } from 'react';
import Comment from './SingleComment';
import axios from 'axios';
import saveImage from '../../../images/Vector1.svg';
import savedImage from '../../../images/Vector39.svg';
import {
  WorkshopSaveButton,
  WorkshopSavedButton,
} from './StyledComments.js';

function DisplayComments(props) {

  const [data, setData] = useState([])
  const [saved, setSaved] = useState(false);
  const save = () => {
    if(saved){
      setSaved(false);
    }else{
      setSaved(true);
    }
  };

  useEffect(() => {
    if (props.selectedCard.id != undefined) {
      axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards/${props.selectedCard.id}/`)
        .then(response => {
          setData((response.data.comments).sort((a, b) => a.published_at < b.published_at ? 1 : -1))
        })
    }
  }, [props.selectedCard])


  const commentNodes = data.map(comment => (
    <Comment author={comment.author} key={comment._id} id={comment._id}>
      {comment.text}
      {saved ? (
          <WorkshopSavedButton onClick={save}>
          <img alt='saved_image' src={savedImage} />
          SAVED
          </WorkshopSavedButton>
        ) : (
          <WorkshopSaveButton onClick={save}>
          <img alt='save_image' src={saveImage} />
          SAVE
          </WorkshopSaveButton>
        )}
    </Comment>
    
  )
  );
  return (
    <div>
      {data.length ? commentNodes : <div style={{padding:"2rem"}}>No comments yet!</div>}
    </div>
  );
};

export default DisplayComments;