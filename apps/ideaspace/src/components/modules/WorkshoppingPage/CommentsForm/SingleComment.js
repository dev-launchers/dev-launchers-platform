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
        <div source={props.children} ><p>{props.children}</p></div>
      </SingleCommentContent>
      <SingleCommentButtons>
      </SingleCommentButtons>
    </div>
  </SingleComment>
);

export default SingleCommentComponent;