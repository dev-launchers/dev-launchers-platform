import React from "react";
import axios from "axios";
import {
  UserNameCommentBox,
  UserNameComment,
  UserComment,
  UserImageOne,
} from "./StyledComments.js";

const MAX_COMMENT_CHARS = 250;

function CommentForm(props) {
  const { selectedCard, ...other } = props;
  const [charsLeft, setCharsLeft] = React.useState(MAX_COMMENT_CHARS);

  const handleChange = (e) => {
    props.setHandleChange(e.target.value);
  };

  const handleTextChange = (e) => {
    const text = e.target.value;
    props.setHandleTextChange(text);

    let characterCount = text.length;
    setCharsLeft(MAX_COMMENT_CHARS-characterCount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var data = { author: props.handleChange, text: props.handleTextChange };

    axios
      .post(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards/${props.selectedCard.id}/comment`,
        data
      )
      .then((response) => {
        if (response.status === 200) {
          props.setHandleChange("");
          props.setHandleTextChange("");
        }
      });
  };
  // move to WorkshoppingPage
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <UserNameCommentBox>
          <UserNameComment
            type="text"
            name="author"
            placeholder="Your name..."
            value={props.handleChange}
            onChange={handleChange}
          />
        </UserNameCommentBox>
        <UserComment>
          <UserImageOne
            alt="user_image"
            src={`https://picsum.photos/70?random=${props.id}`}
          />
          <textarea
            onKeyUp={(e) => {
              e.target.style.height = 'inherit';
              e.target.style.height = `${e.target.scrollHeight}px`; 
              // In case you have a limitation
              // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
              //textCounter(this,'counter',250);
            }}
            style={{width:"100%", overflow:"hidden"}}
            name="text"
            placeholder="What are your thoughts? (max 250 characters)"
            value={props.handleTextChange}
            onChange={handleTextChange}
            maxlength={MAX_COMMENT_CHARS}></textarea>
          {/* source: https://codepen.io/patrickwestwood/pen/gPPywv */}
          <div id="the-count">
            <span id="chars-left">{charsLeft}</span>
          </div>
        </UserComment>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CommentForm;
