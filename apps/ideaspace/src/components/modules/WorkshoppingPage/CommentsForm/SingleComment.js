import {
  SingleComment,
  UserImage,
  TextContent,
  SingleCommentContent,
  SingleCommentButtons
} from './StyledComments.js';
import agent from '@DevLaunchers/utility/agent';
import { molecules } from '@DevLaunchers/components/src/components';

// A function to show the date as X hours ago, etc.
// from: https://stackoverflow.com/a/3177838
function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}

const SingleCommentComponent = props => (
  <SingleComment>
    <UserImage alt="user_image" src={`https://picsum.photos/70?random=${props.id}`} />
    <div className="textContent">
      <SingleCommentContent>
        <h3>{props.author}</h3>
        {/* get the idea ID from the URL if possible and determine the idea owner (maybe do this in another file) */}
      </SingleCommentContent>
      <SingleCommentContent>
        {/* date of creation here, i.e. "2 days ago" */}
        <h5>{timeSince(new Date(props.createdAt))}</h5>
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