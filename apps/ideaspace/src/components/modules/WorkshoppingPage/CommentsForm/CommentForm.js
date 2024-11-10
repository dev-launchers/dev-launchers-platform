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
              className={`flex items-center px-[14px] py-[14px] w-[598px] text-base text-[#494949] border-[#DAD8D9] border-2 ml-2 ${
                isFocused ? 'border-[#7339AC]' : 'border-[#DAD8D9]'
              } ${isExpanded ? 'rounded-[28px]' : 'rounded-[32px]'}`}
              style={{ minHeight: '55px' }}
            >
              <textarea
                placeholder="What are your thoughtsss?"
                className="flex-grow  mr-3 resize-none overflow-hidden focus:outline-none "
                rows="1"
                value={textChange}
                onFocus={() => setIsFocused(true)} // Set isFocused to true on focus
                onBlur={() => setIsFocused(false)} // Set isFocused to false on blur
                onInput={handleInput}
                onChange={handleTextChange} // Update textChange state
              />
              {textChange.trim().length > 0 && (
                <button
                  type="submit"
                  className="p-2 rounded-full text-white self-end"
                  style={{ backgroundColor: '#52287A' }}
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
