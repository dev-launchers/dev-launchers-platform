import React, { useState } from 'react';
import { useRouter } from 'next/router';
import CommentList from './CommentsForm/DisplayComments';
import CommentForm from './CommentsForm/CommentForm';
import { IdeaOverview } from './IdeaOverview/IdeaOverview';
import { atoms } from '@devlaunchers/components/src/components';
import BackButton from '../../common/BackButton/BackButton';
import theme from '../../../styles/theme';
import CircularIndeterminateLoader from '../Loader/CircularIndeterminateLoader'
import {
  Form,
  Comments
} from './CommentsForm/StyledComments';


import {
  Container,
  Wrapper,
  HeadWapper,
  Headline,
  StyledRanbow,
  ParaWrapper,
} from './StyledComponents';

import { useFetchIdea } from './useFetchIdea';

function WorkshoppingPage() {
  const router = useRouter()
  const { ideaId } = router.query;
  const [handleChange, setHandleChange] = useState('');
  const [handleTextChange, setHandleTextChange] = useState('');
  const { data, loading } = useFetchIdea(ideaId)
  return (
    <Container theme={theme}>
      <HeadWapper>
        <Headline>Idea Workshop</Headline>
        <StyledRanbow>
          <atoms.Layer hasRainbowBottom />
        </StyledRanbow>
        <BackButton />
        <ParaWrapper>
          <atoms.Typography type='p' style={{ fontSize: '1.2rem' }}>
            Want to help this product idea? Comment and ideate this idea with other people to help
            it become an open source project
          </atoms.Typography>
        </ParaWrapper>
      </HeadWapper>
      {loading === true ?
        <CircularIndeterminateLoader
          text="Loading..."
          color="black"
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
