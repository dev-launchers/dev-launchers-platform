import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useRouter } from 'next/router';
import CommentList from './CommentsForm/DisplayComments';
import CommentForm from './CommentsForm/CommentForm';
import { IdeaOverview } from './IdeaOverview/IdeaOverview';
import theme from '../../../styles/theme';
import CircularIndeterminateLoader from '../Loader/CircularIndeterminateLoader'
import {
  Form,
  Comments
} from './CommentsForm/StyledComments';

import {
  Container,
  Wrapper,
} from './StyledComponents';

import { useFetchIdea } from './useFetchIdea';

export default function WorkshoppingPage(props) {
  const { ideaId } = props;
  const [handleChange, setHandleChange] = React.useState(null);
  const [handleTextChange, setHandleTextChange] = React.useState([]);
  const { data, loading } = useFetchIdea(ideaId);
  // const [seed, setSeed] = useState(1);

  console.log("number of comments =", data.comments);
  console.log("data =", data);

  return (
    <Container theme={theme}>
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
            <h4 style={{textAlign: "left", paddingLeft: "20px"}}>Comment feed</h4>
            {/* a count of the comments in the comment feed: */}
            <h6 style={{textAlign: "left", paddingLeft: "20px"}}>COMMENTS: {JSON.stringify(data?.comments?.data?.length)}</h6>

            <Form>
              <CommentForm setHandleChange={setHandleChange} data={data} handleChange={handleChange} setHandleTextChange={setHandleTextChange} handleTextChange={handleTextChange} selectedCard={data} />
            </Form>

            <CommentList selectedCard={data} />
          </Comments>
        </Wrapper>
      }
    </Container>
  );
}
