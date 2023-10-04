import React from 'react';
import axios from 'axios';
import {
  UserNameCommentBox,
  UserNameComment,
  UserComment,
  UserImageOne,
} from './StyledComments.js';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import SignInButton from '../../../common/SignInButton/SignInButton';
import { agent } from '@devlaunchers/utility';

function CommentForm(props) {
  const { userData, isAuthenticated } = useUserDataContext();
  const { selectedCard, ...other } = props;
  const [disabled, setDisabled] = React.useState(true);

  const handleTextChange = (e) => {
    const text = e.target.value;
    props.setHandleTextChange(text);

    if (text.trim() == '') {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var data = { author: userData.username, text: props.handleTextChange.trim() };

    const res = await agent.Comments.put(selectedCard.id, data);
    console.log('res', res);
    props.setHandleTextChange('');

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
              placeholder="What are your thoughts?"
              value={props.handleTextChange}
              onChange={handleTextChange}
            ></textarea>
            {/* source: https://codepen.io/patrickwestwood/pen/gPPywv */}
          </UserComment>
          <button type="submit" disabled={disabled}>Submit</button>
        </form>
      ) : (
        <div style={{ margin: '2rem', marginTop: '4rem'}}>
          Sign in to leave a comment!{' '}
          <SignInButton
            redirectUrl={
              `${process.env.NEXT_PUBLIC_FRONT_END_URL}/ideaspace/workshop/` + selectedCard.id
            }
          />
        </div>
      )}
    </div>
  );
}

export default CommentForm;
