import { useState } from 'react';
import {
  UserComment,
  UserImageOne,
  CommentBox,
  SubmitButton,
} from './StyledComments.js';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import SignInButton from '../../../common/SignInButton/SignInButton';
import { agent } from '@devlaunchers/utility';
import { cleanData } from '../../../../utils/StrapiHelper.js';

function CommentForm(props) {
  const { userData, isAuthenticated } = useUserDataContext();
  const { selectedCard, ...other } = props;
  const [disabled, setDisabled] = useState(true);
  const [textChange, setTextChange] = useState('');

  const handleTextChange = (e) => {
    const text = e.target.value;
    setTextChange(text);

    if (textChange.trim().length === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var data = {
      text: textChange.trim(),
      idea_card: selectedCard.id.toString(),
      author: userData.name,
      user: userData.id.toString(),
    };

    try {
      const res = await agent.Comments.post(data);
      setTextChange('');
      // render the comment in the comment feed
      let commentData = cleanData(res);
      commentData.user = userData;
      props.renderNewComment(commentData);
    } catch (e) {
      console.log('error when posting comment', e);
    }
  };

  // move to WorkshoppingPage?
  return (
    <div>
      {isAuthenticated ? (
        <form
          onSubmit={handleSubmit}
          style={{
            textAlign: 'left',
            paddingLeft: '20px',
            paddingRight: '20px',
          }}
        >
          <UserComment>
            <UserImageOne alt="user_image" src={userData.profilePictureUrl} />
            <CommentBox
              onKeyUp={(e) => {
                e.target.style.height = 'inherit';
                e.target.style.height = `${e.target.scrollHeight}px`;
                // In case you have a limitation
                // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
                //textCounter(this,'counter',250);
              }}
              style={{ width: '100%', overflow: 'hidden' }}
              name="text"
              // placeholder="What are your thoughts?"
              value={textChange}
              onChange={handleTextChange}
              // maxlength={MAX_COMMENT_CHARS}
            ></CommentBox>
            <button
              type="submit"
              style={{ color: 'white', backgroundColor: '#3A7CA5' }}
              disabled={textChange.trim().length === 0}
            >
              <i class="fas fa-arrow-right"></i>
            </button>
          </UserComment>
        </form>
      ) : (
        <div style={{ margin: '2rem', marginTop: '4rem' }}>
          Sign in to leave a comment!{' '}
          <SignInButton
            redirectUrl={
              `${process.env.NEXT_PUBLIC_FRONT_END_URL}/ideaspace/workshop/` +
              selectedCard.id
            }
          />
        </div>
      )}
    </div>
  );
}

export default CommentForm;
