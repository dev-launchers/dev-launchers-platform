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
        {/* get the idea ID from the URL if possible and determine the idea owner (maybe do this in another file) */}
        <br></br>
        {/* date of creation here, i.e. "2 days ago" */}
        <h5>{new Date(props.createdAt)[Symbol.toPrimitive]("string")}</h5>
      </SingleCommentContent>
      <SingleCommentContent>
        <div source={props.children}><p>{props.children}</p></div>
      </SingleCommentContent>
      <SingleCommentButtons>
      </SingleCommentButtons>
      <hr></hr>
    </div>
  </SingleComment>
);

export default SingleCommentComponent;