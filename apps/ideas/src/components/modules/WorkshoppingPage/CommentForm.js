import React from 'react';
import axios from 'axios';
import {
  UserNameCommentBox,
  UserNameComment,
  UserComment,
  UserImageOne,
} from './StyledComments.js';
import './comments.css';

const MAX_COMMENT_CHARS = 250;
const MIN_COMMENT_CHARS = 25;

function CommentForm(props) {
  const { selectedCard, ...other } = props;
  const [charsLeft, setCharsLeft] = React.useState(MAX_COMMENT_CHARS);
  const [charsCount, setCharsCount] = React.useState(MIN_COMMENT_CHARS);
  const [borderColorName, setBorderColorName] = React.useState('');
  const [borderColorComment, setBorderColorComment] = React.useState('');

  const handleChange = (e) => {
    if (e.target.value.length > 0) {
      setBorderColorName('');
    }
    props.setHandleChange(e.target.value);
  };

  const handleTextChange = (e) => {
    const text = e.target.value;
    props.setHandleTextChange(text);
    let characterCount = text.length;
    setCharsLeft(MAX_COMMENT_CHARS - characterCount);
    if (characterCount >= 25) {
      setCharsCount(0);
      setBorderColorComment('');
    } else {
      setCharsCount(MIN_COMMENT_CHARS - characterCount);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var data = { author: props.handleChange, text: props.handleTextChange };
    if (
      props.handleTextChange.length < MIN_COMMENT_CHARS &&
      props.handleChange.length == 0) {
      setBorderColorComment('red');
      setBorderColorName('red');
    } else if (props.handleTextChange.length < MIN_COMMENT_CHARS) {
      setBorderColorComment('red');
    } else if (props.handleChange.length == 0) {
      setBorderColorName('red');
    } else {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards/${props.selectedCard.id}/comment`,
          data
        )
        .then((response) => {
          if (response.status === 200) {
            props.setHandleChange('');
            props.setHandleTextChange('');
          }
        });
        setBorderColorName('grey');
        setBorderColorComment('grey');
      location.reload();
    }
  };

  // move to WorkshoppingPage
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <UserNameCommentBox>
          <UserNameComment    
            className='input_color1'   
            style={{borderColor: borderColorName}}
            aria-hidden="true"
            type="text"
            name="author"
            placeholder="Your name..."
            value={props.handleChange}
            onChange={handleChange}
            minlength={0}
          />
        </UserNameCommentBox>
        <UserComment>
          <UserImageOne
            alt="user_image"
            src={`https://picsum.photos/70?random=${props.id}`}
          />
          <textarea
            className='input_color2'
            onKeyUp={(e) => {
              e.target.style.height = 'inherit';
              e.target.style.height = `${e.target.scrollHeight}px`;
              // In case you have a limitation
              // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
              //textCounter(this,'counter',250);
            }}
            style={{ width: '100%', overflow: 'hidden', borderColor: borderColorComment}}
            name="text"
            placeholder="What are your thoughts? (min 25 characters - max 250 characters)"
            value={props.handleTextChange}
            onChange={handleTextChange}
            maxlength={MAX_COMMENT_CHARS}
            minlength={MIN_COMMENT_CHARS}
          ></textarea>
          {/* source: https://codepen.io/patrickwestwood/pen/gPPywv */}
          <div id="the-count">
            <p id="chars-left">{charsLeft}</p>
            <p id="chars-leftToMin">{charsCount}</p>
          </div>
        </UserComment>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CommentForm;
