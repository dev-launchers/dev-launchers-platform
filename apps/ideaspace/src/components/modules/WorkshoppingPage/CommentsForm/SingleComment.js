import {
  SingleComment,
  UserImage,
  TextContent,
  SingleCommentContent,
  SingleCommentButtons
} from './StyledComments.js';
import agent from '@DevLaunchers/utility/agent';
import { molecules } from '@DevLaunchers/components/src/components';

const SingleCommentComponent = props => (
  <SingleComment>
    <UserImage alt="user_image" src={`https://picsum.photos/70?random=${props.id}`} />
    <div className="textContent">
      <SingleCommentContent>
        <h3>{props.author}</h3>
<<<<<<< Updated upstream
=======
        {/* get the idea ID from the URL if possible and determine the idea owner (maybe do this in another file) */}
        {/* if the user who wrote this comment is the idea owner, then have an "idea owner" tag */}
        <h3>{props.createdBy}</h3>
        {/* date of creation here, i.e. "2 days ago" */}
        <h3>{props.publishedAt}</h3>
      </SingleCommentContent>
      <SingleCommentContent>
>>>>>>> Stashed changes
        <div source={props.children} ><p>{props.children}</p></div>
      </SingleCommentContent>
      <SingleCommentButtons>
      </SingleCommentButtons>
      <hr></hr>
    </div>
  </SingleComment>
);

export default SingleCommentComponent;