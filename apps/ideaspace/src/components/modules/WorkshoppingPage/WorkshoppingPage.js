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
  console.log("Props given by parent component: ", props)

  const router = useRouter()
  //console.log("Router: ", router)
  //console.log("Router query: ", router.query)
  if(!router.isReady){
    console.log("It's NOT ready yet!")
  }
  else{
    console.log("It's ready!")
  }
  console.log("Idea ID via router: ", router.query.ideaId)
  React.useEffect(() => {
    if(!router.isReady){ return; }
    else{
      console.log("It's ready!")
      console.log("Router inside hook: ", router);
    }
  }, [router.isReady]);
  // const { ideaId } = router.query;
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
    // test outputs
    console.log("Idea ID = ", ideaId)
    console.log("Data = ", data)
    console.log("Comments = ", comments)

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
                <CommentForm setHandleChange={setHandleChange} data={data} handleChange={handleChange} setHandleTextChange={setHandleTextChange} handleTextChange={handleTextChange} selectedCard={data} />
              </Form>

              <DisplayComments selectedCard={data} comments={comments} />

              <Form>
                <CommentForm setHandleChange={setHandleChange} data={data} handleChange={handleChange} setHandleTextChange={setHandleTextChange} handleTextChange={handleTextChange} selectedCard={data} />
              </Form>
            </Comments>
          </Wrapper>
        }
      </Container>
    );
  }
}

// export default WorkshoppingPage;