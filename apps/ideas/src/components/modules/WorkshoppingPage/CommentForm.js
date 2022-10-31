import axios from "axios";
import {
  UserNameCommentBox,
  UserNameComment,
  UserComment,
  UserImageOne,
} from "./StyledComments.js";
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import SignInButton from "../../common/SignInButton/SignInButton";

function CommentForm(props) {
  const { userData, isAuthenticated } = useUserDataContext();
  const { selectedCard, ...other } = props;

  const handleTextChange = (e) => {
    props.setHandleTextChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var data = { author: userData.username, text: props.handleTextChange };

    axios
      .post(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards/${selectedCard.id}/comment`,
        data
      )
      .then((response) => {
        if (response.status === 200) {
          props.setHandleTextChange("");
        }
      });
  };
  // move to WorkshoppingPage
  return (
    <div>
      {isAuthenticated ? 
        <form onSubmit={handleSubmit}>
          {/* <UserNameCommentBox>
            <UserNameComment
              type="text"
              name="author"
              placeholder="Your name..."
              value={props.handleChange}
              onChange={handleChange}
            />
          </UserNameCommentBox> */}
          <UserComment>
            <UserImageOne
              alt="user_image"
              src={userData.profilePictureUrl}
            />
            <textarea
              onKeyUp={(e) => {
                e.target.style.height = 'inherit';
                e.target.style.height = `${e.target.scrollHeight}px`; 
                // In case you have a limitation
                // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
              }}
              style={{width:"100%", overflow:"hidden"}}
              name="text"
              placeholder="What are your thoughts?"
              value={props.handleTextChange}
              onChange={handleTextChange}></textarea>
          </UserComment>
          <button type="submit">Submit</button>
        </form>
        : 
        <div style={{margin:"2rem",marginTop:"4rem"}}>
          Sign in to leave a comment!{" "}
          <SignInButton redirectUrl={"https://devlaunchers.org/ideas/workshop/"+selectedCard.id} />
        </div>  
    }
    </div>
  );
}

export default CommentForm;
