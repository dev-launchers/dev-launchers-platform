import Comment from './SingleComment';

function DisplayComments(props) {
  const commentNodes = props.comments.map((comment, index) => {
    const commentUser = comment.user;
    const commentAuthorName =
      commentUser.username !== undefined
        ? commentUser.username
        : commentUser.profile.displayName;
    const isLast = index === props.comments.length - 1;
    return (
      <Comment
        user={commentUser}
        author={commentAuthorName}
        key={comment.id}
        id={comment.id}
        createdAt={comment.createdAt}
        publishedAt={comment.publishedAt}
        updatedAt={comment.updatedAt}
        forIdea={props.selectedCard}
        isLast={isLast}
      >
        {comment.text}
      </Comment>
    );
  });

  return (
    <div>
      {props.comments.length ? (
        commentNodes
      ) : (
        <div style={{ padding: '2rem', color: '#DAD8D9' }}>
          No comments yet!
        </div>
      )}
    </div>
  );
}

export default DisplayComments;
