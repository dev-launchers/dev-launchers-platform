import React, { useState } from 'react';
import { useRouter } from 'next/router';
import CommentList from './CommentsForm/DisplayComments';
import CommentForm from './CommentsForm/CommentForm';
import { IdeaOverview } from './IdeaOverview/IdeaOverview';
import styled from 'styled-components';
import CircularIndeterminateLoader from '../Loader/CircularIndeterminateLoader'

import {
  Container,
  Form,
  Comments
} from './CommentsForm/StyledComments.js';
import { useFetchIdea } from './useFetchIdea';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

function WorkshoppingPage() {
  const router = useRouter()
  const { ideaId } = router.query;
  const [handleChange, setHandleChange] = useState('');
  const [handleTextChange, setHandleTextChange] = useState('');
  const { data, loading } = useFetchIdea(ideaId)
  return (
    <Container>
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
