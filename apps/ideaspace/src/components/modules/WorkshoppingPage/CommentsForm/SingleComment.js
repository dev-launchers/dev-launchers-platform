<<<<<<< HEAD:apps/ideaspace/src/components/modules/WorkshoppingPage/SingleComment.js
import { useEffect } from "react";
import axios from "axios";
=======

>>>>>>> ideaspace/strapiv4:apps/ideaspace/src/components/modules/WorkshoppingPage/CommentsForm/SingleComment.js
import {
  SingleComment,
  UserImage,
  TextContent,
  SingleCommentContent,
  SingleCommentButtons
} from './StyledComments.js';
import agent from '@DevLaunchers/utility/agent';
import { molecules } from '@DevLaunchers/components/src/components';

<<<<<<< HEAD:apps/ideaspace/src/components/modules/WorkshoppingPage/SingleComment.js
function SingleCommentComponent(props) {
  useEffect(() => {
      axios
        .get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/likes`, {
          withCredentials: true,
        })
        .then((response) => {
          console.log(response);
        });
    }, []);

  return (
    <SingleComment>
      <UserImage alt="user_image" src={`https://picsum.photos/70?random=${props.id}`} />
      <div className="textContent">
        <SingleCommentContent>
          <h3>{props.author}</h3>
          <div source={props.children} ><p>{props.children}</p></div>
        </SingleCommentContent>
        <SingleCommentButtons>
          <molecules.LikeButton text="5"/>
        </SingleCommentButtons>
      </div>
    </SingleComment>
  );
};
=======
const SingleCommentComponent = props => (
  <SingleComment>
    <UserImage alt="user_image" src={`https://picsum.photos/70?random=${props.id}`} />
    <div className="textContent">
      <SingleCommentContent>
        <h3>{props.author}</h3>
        <div source={props.children} ><p>{props.children}</p></div>
      </SingleCommentContent>
      <SingleCommentButtons>
      </SingleCommentButtons>
    </div>
  </SingleComment>
);
>>>>>>> ideaspace/strapiv4:apps/ideaspace/src/components/modules/WorkshoppingPage/CommentsForm/SingleComment.js

export default SingleCommentComponent;