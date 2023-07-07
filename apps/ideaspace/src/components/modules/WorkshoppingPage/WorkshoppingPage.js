import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import Error from "next/error";
import { useRouter } from 'next/router';
import CommentList from './CommentsForm/DisplayComments';
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
  const { ideaId } = router.query;
  const [handleChange, setHandleChange] = useState('');
  const [handleTextChange, setHandleTextChange] = useState('');
  const { data, loading, hidden, getError } = useFetchIdea(ideaId)

  const [ArchivedIdea, confirmArchived] = useConfirm(
    ["This Idea has been archived.", '', ''],
    "You can't workshop on it.",
    ['primary', 'got it', ''],
  );

  // const { ideaId } = props;
  // const [handleChange, setHandleChange] = React.useState(null);
  // const [handleTextChange, setHandleTextChange] = React.useState([]);
  // const { data, loading } = useFetchIdea(ideaId);
  // // const [seed, setSeed] = useState(1);

  console.log("number of comments =", data.comments);
  console.log("data =", data);

  // copy-pasted from DisplayComments.js in the CommentsForm folder
  const [comments, setComments] = useState([]); // the data for the comments array; setComments updates comment and triggers a re-render

  React.useEffect(async () => {
    if (hidden) {
      await confirmArchived();
      window.history.back(-1);
    }
  }, [hidden]);

  if (getError) {
    return <Error statusCode={404} title="page Not Found" />;
  } else {
    // <Container theme={theme}>
    //   {loading === true ?
    //     <CircularIndeterminateLoader
    //       text="Loading..."
    //       color="white"
    //     />
    //     :
    //     <Wrapper>
    //       <IdeaOverview selectedCard={data} />

    //       <Form>
    //         <CommentForm setHandleChange={setHandleChange} data={data} handleChange={handleChange} setHandleTextChange={setHandleTextChange} handleTextChange={handleTextChange} selectedCard={data} />
    //       </Form>

    //       <Comments>
    //         <h4 style={{textAlign: "left", paddingLeft: "20px"}}>Comment feed</h4>
    //         {/* a count of the comments in the comment feed: */}
    //         <h6 style={{textAlign: "left", paddingLeft: "20px"}}>COMMENTS: {JSON.stringify(data?.comments?.data?.length)}</h6>

    //         <Form>
    //           <CommentForm setHandleChange={setHandleChange} data={data} handleChange={handleChange} setHandleTextChange={setHandleTextChange} handleTextChange={handleTextChange} selectedCard={data} />
    //         </Form>

    //         <CommentList selectedCard={data} />
    //       </Comments>
    //     </Wrapper>
    //   }
    // </Container>

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
}
