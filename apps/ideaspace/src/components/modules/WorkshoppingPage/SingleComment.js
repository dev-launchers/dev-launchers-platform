
import LikeButton from '../../../../../../packages/UI/src/components/molecules/InteractionButtons/LikeButton';
import {
  SingleComment,
  UserImage,
  TextContent,
  SingleCommentContent,
  SingleCommentButtons
} from './StyledComments.js';

const SingleCommentComponent = props => (
  <SingleComment>
    <UserImage alt="user_image" src={`https://picsum.photos/70?random=${props.id}`} />
    <div className="textContent">
      <SingleCommentContent>
        <h3>{props.author} - {props.author.role}</h3> {/* TODO: replace "idea owner" w/ a variable that contains the user's role pertaining to the idea (Iris is working on that) */}
        <div source={props.children} ><p>{props.children}</p></div>
      </SingleCommentContent>
      <SingleCommentButtons>
        <LikeButton></LikeButton>
      </SingleCommentButtons>
    </div>
  </SingleComment>
);

export default SingleCommentComponent;