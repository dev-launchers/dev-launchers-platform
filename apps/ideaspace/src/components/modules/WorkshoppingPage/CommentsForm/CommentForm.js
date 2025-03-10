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
import SendButton from '../../../../images/send_button_default.svg';

function CommentForm(props) {
  const { userData, isAuthenticated } = useUserDataContext();
  const { selectedCard, ...other } = props;
  const [disabled, setDisabled] = useState(true);
  const [textChange, setTextChange] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleInput = (e) => {
    e.target.style.height = '16px';
    e.target.style.height = `${e.target.scrollHeight}px`;
    setIsExpanded(e.target.scrollHeight > 30);
  };

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
    <div className="container">
      {isAuthenticated ? (
        <form
          onSubmit={handleSubmit}
          style={{
            textAlign: 'left',
          }}
        >
          <UserComment>
            <UserImageOne alt="user_image" src={userData.profilePictureUrl} />
            <div
              className={`relative flex items-center py-[14px] w-full text-base text-[#494949] border-[#7339AC] border-2 ml-2 ${
                isFocused ? 'border-[#7339AC]' : 'border-[#DAD8D9]'
              } ${isExpanded ? 'rounded-[28px]' : 'rounded-[32px]'} max-w-full`}
              style={{
                minHeight: '55px',
                paddingLeft: '16px',
                paddingRight: '50px',
              }}
            >
              <textarea
                placeholder="What are your thoughts?"
                className="flex-grow mr-3 resize-none overflow-hidden focus:outline-none w-full max-w-[500px] min-w-[100px]"
                rows="1"
                value={textChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onInput={handleInput}
                onChange={handleTextChange}
              />
              {textChange.trim().length > 0 && (
                <button
                  type="submit"
                  className="  rounded-full text-white"
                  style={{
                    position: 'absolute',
                    right: '10px',
                    bottom: '8px',
                    backgroundColor: '#52287A',
                    height: '36px',
                    width: '36px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '2px solid #3f1f5f',
                  }}
                >
                  <i className="fas fa-arrow-up"></i>
                </button>
              )}
            </div>
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
