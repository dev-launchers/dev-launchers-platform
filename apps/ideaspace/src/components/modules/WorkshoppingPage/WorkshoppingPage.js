import React, { useState } from 'react';
import { useRouter } from 'next/router';
import CommentList from './CommentsForm/DisplayComments';
import CommentForm from './CommentsForm/CommentForm';
import { IdeaOverview } from './IdeaOverview/IdeaOverview';
import theme from '../../../styles/theme';
import CircularIndeterminateLoader from '../Loader/CircularIndeterminateLoader'
import useConfirm from '../../common/DialogBox/DialogBox';
import {
  Form,
  Comments
} from './CommentsForm/StyledComments';

import {
  Container,
  Wrapper,
} from './StyledComponents';

import { useFetchIdea } from './useFetchIdea';

function WorkshoppingPage() {
  const router = useRouter()
  const { ideaId } = router.query;
  const [handleChange, setHandleChange] = useState('');
  const [handleTextChange, setHandleTextChange] = useState('');
  const { data, loading, hidden } = useFetchIdea(ideaId)

  const [ArchivedIdea, confirmArchived] = useConfirm(
    ["This Idea has been archived.", '', ''],
    "You can't workshop on it.",
    ['primary', 'got it', ''],
);

  React.useEffect(async()=>{
    if (hidden) {
      await confirmArchived();
      window.history.back(-1);
    }
  },[hidden]);
  
  return (
    <Container theme={theme}>
      <ArchivedIdea />
      {loading === true ?
        <CircularIndeterminateLoader
          text="Loading..."
          color="white"
        />
        :
        <Wrapper>
          <IdeaOverview selectedCard={data} />

          <Form>
            <CommentForm setHandleChange={setHandleChange} data={data} handleChange={handleChange} setHandleTextChange={setHandleTextChange} handleTextChange={handleTextChange} selectedCard={data} />
          </Form>

          <Comments>
            {/* a count of the comments in the comment feed: */}
            {/* <h6>Comment Feed: {data.comments.length}</h6> */}
            <CommentList selectedCard={data} />
          </Comments>
        </Wrapper>
      }
    </Container>
  );
}

export default WorkshoppingPage;
