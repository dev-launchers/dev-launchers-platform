import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import Error from "next/error";
import { useRouter } from 'next/router';
import DisplayComments from './CommentsForm/DisplayComments';
import CommentForm from './CommentsForm/CommentForm';
import { IdeaOverview } from './IdeaOverview/IdeaOverview';
import { atoms } from '@devlaunchers/components/src/components';
import BackButton from '../../common/BackButton/BackButton';
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
  HeadWapper,
  Headline,
  StyledRanbow,
  ParaWrapper,
} from './StyledComponents';

import { useFetchIdea } from './useFetchIdea';

export default function WorkshoppingPage(props) {

  const router = useRouter()
  
  React.useEffect(() => {
    if(!router.isReady){ return; }
  }, [router.isReady]);
 
  const { ideaId } = "";

  const [comments, setComments] = useState([]);

  const [handleChange, setHandleChange] = useState('');
  const [handleTextChange, setHandleTextChange] = useState('');
  const { data, loading, hidden, getError } = useFetchIdea(router.query.ideaId, setComments);

  const [ArchivedIdea, confirmArchived] = useConfirm(
    ["This Idea has been archived.", '', ''],
    "You can't workshop on it.",
    ['primary', 'got it', ''],
  );

  React.useEffect(async () => {
    if (hidden) {
      await confirmArchived();
      window.history.back(-1);
    }
  }, [hidden]);

  if (getError) {
    return <Error statusCode={404} title="page Not Found" />;
  } else {

    return (
      <Container theme={theme}>
        <ArchivedIdea />

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
            color="white"
          />
          :
          <Wrapper>
            <IdeaOverview selectedCard={data} />

            <Comments>
              <h5 style={{textAlign: "left", paddingLeft: "20px"}}>COMMENT FEED: {comments.length}</h5>

              <Form>
                <CommentForm setHandleChange={setHandleChange} data={data} handleChange={handleChange} setHandleTextChange={setHandleTextChange} handleTextChange={handleTextChange} selectedCard={data} comments={comments} setComments={() => setComments(comments)} />
              </Form>

              <DisplayComments selectedCard={data} comments={comments} />
            </Comments>
          </Wrapper>
        }
      </Container>
    );
  }
}