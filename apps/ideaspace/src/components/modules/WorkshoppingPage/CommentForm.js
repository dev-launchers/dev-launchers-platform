import React from 'react';
import axios from 'axios';
import {
  UserNameCommentBox,
  UserNameComment,
  UserComment,
  UserImageOne,
} from './StyledComments.js';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import SignInButton from '../../common/SignInButton/SignInButton';

const MAX_COMMENT_CHARS = 250;

function CommentForm(props) {
  const { userData, isAuthenticated } = useUserDataContext();
  const { selectedCard, ...other } = props;
  const [charsLeft, setCharsLeft] = React.useState(MAX_COMMENT_CHARS);

  const handleTextChange = (e) => {
    const text = e.target.value;
    props.setHandleTextChange(text);

    let characterCount = text.length;
    setCharsLeft(MAX_COMMENT_CHARS - characterCount);
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
          props.setHandleTextChange('');
        }
      });
  };
  // move to WorkshoppingPage
  return (
    <div>
      {isAuthenticated ? (
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
            <UserImageOne alt="user_image" src={userData.profilePictureUrl} />
            <textarea
              onKeyUp={(e) => {
                e.target.style.height = 'inherit';
                e.target.style.height = `${e.target.scrollHeight}px`;
                // In case you have a limitation
                // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
                //textCounter(this,'counter',250);
              }}
              style={{ width: '100%', overflow: 'hidden' }}
              name="text"
              placeholder="Add your comment"
              value={props.handleTextChange}
              onChange={handleTextChange}
              maxlength={MAX_COMMENT_CHARS}
            ></textarea>
            {/* source: https://codepen.io/patrickwestwood/pen/gPPywv */}
            <div id="the-count">
              <span id="chars-left">{charsLeft}</span>
            </div>
          </UserComment>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div style={{ margin: '2rem', marginTop: '4rem'}}>
          Sign in to leave a comment!{' '}
          <SignInButton
            redirectUrl={
              'https://devlaunchers.org/ideaspace/workshop/' + selectedCard.id
            }
          />
        </div>
      )}
    </div>
  );
}

export default CommentForm;
