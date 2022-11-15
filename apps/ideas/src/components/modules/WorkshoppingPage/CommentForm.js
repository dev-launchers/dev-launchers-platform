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

  const handleChange = (e) => {
    props.setHandleChange(e.target.value);
  };

  const handleTextChange = (e) => {
    const text = e.target.value;
    props.setHandleTextChange(text);

    let characterCount = text.length;
    setCharsLeft(MAX_COMMENT_CHARS - characterCount);
    if (characterCount >= 25) {
      setCharsCount(0);
    } else {
      setCharsCount(MIN_COMMENT_CHARS - characterCount);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var data = { author: props.handleChange, text: props.handleTextChange };
    if (
      props.handleTextChange.length < MIN_COMMENT_CHARS &&
      props.handleChange.length == 0
    ) {
      window.alert('Please fill in a name and a comment to 25 characters!');
      var message_color = document.getElementById('message');
      message_color.style.borderColor = '#FF0000';
      var name_col = document.getElementById('name');
      name_col.style.borderColor = '#FF0000';
    } else if (props.handleTextChange.length < MIN_COMMENT_CHARS) {
      window.alert('Please fill in a comment to 25 characters!');
      var message_color = document.getElementById('message');
      message_color.style.borderColor = '#FF0000';
    } else if (props.handleChange.length == 0) {
      window.alert('Please fill in a name!');
      var name_col = document.getElementById('name');
      name_col.style.borderColor = '#FF0000';
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
      var message_color = document.getElementById('message');
      var name_col = document.getElementById('name');
      if (name_col.style.borderColor == '#FF0000') {
        name_col.style.borderColor = 'grey';
      }
      if (message_color.style.borderColor == '#FF0000') {
        message_color.style.borderColor = 'grey';
      }
      location.reload();
    }
  };

  // move to WorkshoppingPage
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <UserNameCommentBox>
          <UserNameComment
            className="input_color1"
            id="name"
            aria-hidden="true"
            type="text"
            name="author"
            placeholder="Your name..."
            value={props.handleChange}
            onChange={handleChange}
            minlength={0}
            // required
          />
        </UserNameCommentBox>
        <UserComment>
          <UserImageOne
            alt="user_image"
            src={`https://picsum.photos/70?random=${props.id}`}
          />
          <textarea
            className="input_color2"
            id="message"
            onKeyUp={(e) => {
              e.target.style.height = 'inherit';
              e.target.style.height = `${e.target.scrollHeight}px`;
              // In case you have a limitation
              // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
              //textCounter(this,'counter',250);
            }}
            style={{ width: '100%', overflow: 'hidden' }}
            name="text"
            placeholder="What are your thoughts? (min 25 characters - max 250 characters)"
            value={props.handleTextChange}
            onChange={handleTextChange}
            maxlength={MAX_COMMENT_CHARS}
            minlength={MIN_COMMENT_CHARS}
            // required
          ></textarea>
          {/* source: https://codepen.io/patrickwestwood/pen/gPPywv */}
          <div id="the-count">
            <span id="chars-left">{charsLeft}</span>
            <br />
            <span id="chars-leftToMin">{charsCount}</span>
          </div>
        </UserComment>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CommentForm;
