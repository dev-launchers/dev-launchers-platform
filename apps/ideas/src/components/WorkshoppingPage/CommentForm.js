import axios from "axios";
import {
  UserNameCommentBox,
  UserNameComment,
  UserComment,
  UserImageOne,
} from "./StyledComments.js";

function CommentForm(props) {
  const { selectedCard, ...other } = props;

  const handleChange = (e) => {
    props.setHandleChange(e.target.value);
  };

  const handleTextChange = (e) => {
    props.setHandleTextChange(e.target.value);
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
          <!-- source: https://stackoverflow.com/a/12745387 -->
          <input disabled  maxlength="3" size="3" value="250" id="counter"></input>  <!-- shows how many characters are left available in the comments form -->
          <br></br>
          <textarea
            onKeyUp={(e) => {
              e.target.style.height = 'inherit';
              e.target.style.height = `${e.target.scrollHeight}px`; 
              // In case you have a limitation
              // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
              textCounter(this,'counter',250);
            }}
            style={{width:"100%", overflow:"hidden"}}
            name="text"
            placeholder="What are your thoughts? (max 250 characters)"
            value={props.handleTextChange}
            onChange={handleTextChange}
            maxlength="250"></textarea>
          <script>
            // returns how many characters you can add to the comments form
            function textCounter(field,field2,maxlimit)
            {
              var countfield = document.getElementById(field2);
              if ( field.value.length > maxlimit ) {
                field.value = field.value.substring( 0, maxlimit );
                return false;
              } else {
                countfield.value = maxlimit - field.value.length;
              }
            }
          </script>
        </UserComment>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CommentForm;
