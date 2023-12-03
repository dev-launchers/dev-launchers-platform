import {
  SingleComment,
  UserImage,
  SingleCommentContent,
  SingleCommentButtons
} from './StyledComments.js';
import { LikeButton } from '@devlaunchers/components/src/components/molecules';
import { useState } from 'react';

// A function to show the date as X hours ago, etc.
// from: https://stackoverflow.com/a/3177838
function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    if (Math.floor(interval) == 1) {
      return "1 year ago";
    } else {
      return Math.floor(interval) + " years ago";
    }
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    if (Math.floor(interval) == 1) {
      return "1 month ago";
    } else {
      return Math.floor(interval) + " months ago";
    }
  }
  interval = seconds / 86400;
  if (interval > 1) {
    if (Math.floor(interval) == 1) {
      return "1 day ago";
    } else {
      return Math.floor(interval) + " days ago";
    }
  }
  interval = seconds / 3600;
  if (interval > 1) {
    if (Math.floor(interval) == 1) {
      return "1 hour ago";
    } else {
      return Math.floor(interval) + " hours ago";
    }
  }
  interval = seconds / 60;
  if (interval > 1) {
    if (Math.floor(interval) == 1) {
      return "1 minute ago";
    } else {
      return Math.floor(interval) + " minutes ago";
    }
  }
  if (Math.floor(interval) == 1) {
    return "1 second ago";
  } else {
    return Math.floor(seconds) + " seconds ago";
  }
}

// Do we need to make a function returning the comment component to keep track of the likes?

// const SingleCommentComponent = props => (
//   // const [liked, setLiked] = useState(false);
//   <div className="textContent">
//     <SingleComment>
//       <UserImage alt="user_image" src={`https://picsum.photos/70?random=${props.id}`} />
//       <div className="textContent">
//         <SingleCommentContent>
//           <h3>{props.author}</h3>
//           {/* get the idea ID from the URL if possible and determine the idea owner (maybe do this in another file) */}
//         </SingleCommentContent>
//         <SingleCommentContent>
//           {/* date of creation here, i.e. "2 days ago" */}
//           <h5>{timeSince(new Date(props.createdAt))}</h5>
//         </SingleCommentContent>
//       </div>
//     </SingleComment>
//     <SingleComment>
//       <div className="textContent">
//         <SingleCommentContent>
//           <div source={props.children}><p>{props.children}</p></div>
//         </SingleCommentContent>
//         <SingleCommentButtons style={{ display: "flex" }}>
//           <LikeButton style={{ marginLeft: "auto" }} onClick={handleLikeClick} filled={(false) ? false : true} text={(true) ? "479" : "Like"} />
//         </SingleCommentButtons>
//         <hr></hr>
//       </div>
//     </SingleComment>
//   </div>
// );

function SingleCommentComponent(props) {
  const [liked, setLiked] = useState(false);

  // a function to keep track of the number of likes and when the user clicks the like button for this comment
  function handleLikeClick() {
    if (liked) {
      setLiked(false);
    } else {
      setLiked(true);
    }
  }

  return (
    <div className="textContent">
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
        </div>
      </SingleComment>
      <SingleComment>
        <div className="textContent">
          <SingleCommentContent>
            <div source={props.children}><p>{props.children}</p></div>
          </SingleCommentContent>
          <SingleCommentButtons style={{ display: "flex" }}>
            <LikeButton style={{ marginLeft: "auto" }} onClick={handleLikeClick} filled={liked ? true : false} text={liked ? "479" : "Like"} />
          </SingleCommentButtons>
          <hr></hr>
        </div>
      </SingleComment>
    </div>
  )
}

export default SingleCommentComponent;