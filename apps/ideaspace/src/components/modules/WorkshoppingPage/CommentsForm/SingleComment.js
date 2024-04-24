import {
  SingleComment,
  UserImage,
  SingleCommentContent,
  SingleCommentButtons
} from './StyledComments.js';
import { LikeButton } from '@devlaunchers/components/src/components/molecules';
import { useState } from 'react';
import { useUserDataContext } from '@devlaunchers/components/src/context/UserDataContext.js';

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
  const { userData, isAuthenticated } = useUserDataContext();
  const [liked, setLiked] = useState(false);
  const [commentLikes, setCommentLikes] = useState([]);
  const [state, setState] = useState(false); // to refresh the page when a comment receives a like

  // a function to keep track of the number of likes and when the user clicks the like button for this comment
  function handleLikeClick(event) {
    if (liked) {
      // if there's a like object corresponding to this user and comment, delete it

      // Refresh the page so that the new comment is displayed
      setState(true);

      setLiked(false);
    } else {
      // create a like object using the Like collection from the strapiv4 repo, storing the user ID, the comment ID, and the "Comment" object type
      var likeData = { objectId: this.id, objectType: "Comment", users_permission_user: userData.userId };

      try {
        const res = agent.Likes.post(likeData);
      } catch(error) {
        console.error(error)
      }

      event.preventDefault();
      

      try {
        
        props.setHandleTextChange('');
      } catch(error) {
        console.error(error);
      }

      // Refresh the page so that the new comment is displayed
      setState(true);

      setLiked(true);
    }
  }

  return (
    <div className="textContent">
      <SingleComment>
        <UserImage alt="user_image" src={`https://picsum.photos/70?random=${props.id}`} />
        <div className="textContent">
          <SingleCommentContent>
            <h3>{props.author}</h3><h5>{props.forIdea.author?.username == props.author?.username ? "idea owner" : ""}</h5>
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