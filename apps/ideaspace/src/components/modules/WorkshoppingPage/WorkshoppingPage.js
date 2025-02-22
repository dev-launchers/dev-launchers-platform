import React, { useState } from 'react';
import Error from 'next/error';
import { useRouter } from 'next/router';
import DisplayComments from './CommentsForm/DisplayComments';
import CommentForm from './CommentsForm/CommentForm';
import { IdeaOverview } from './IdeaOverview/IdeaOverview';
import { atoms } from '@devlaunchers/components/src/components';
import BackButton from '../../common/BackButton/BackButton';
import theme from '../../../styles/theme';
import CircularIndeterminateLoader from '../Loader/CircularIndeterminateLoader';
import useConfirm from '../../common/DialogBox/DialogBox';
import { Form, Comments } from './CommentsForm/StyledComments';
import { ChevronLeft } from 'lucide-react';

import {
  Container,
  Wrapper,
  HeadWapper,
  Headline,
  StyledRanbow,
  ParaWrapper,
  InnerWrapper,
} from './StyledComponents';

import { useFetchIdea } from './useFetchIdea';

export default function WorkshoppingPage(props) {
  const router = useRouter();

  React.useEffect(() => {
    if (!router.isReady) {
      return;
    }
  }, [router.isReady]);

  const [comments, setComments] = useState([]);

  const [handleChange, setHandleChange] = useState('');

  const { data, loading, hidden, getError } = useFetchIdea(
    router.query.ideaId,
    setComments
  );

  const [ArchivedIdea, confirmArchived] = useConfirm(
    ['This Idea has been archived.', '', ''],
    "You can't workshop on it.",
    ['primary', 'got it', '']
  );

  React.useEffect(async () => {
    if (hidden) {
      await confirmArchived();
      window.history.back(-1);
    }
  }, [hidden]);

  function renderNewComment(comment) {
    setComments((prev) => [comment, ...prev]);
  }

  if (getError) {
    return <Error statusCode={404} title="page Not Found" />;
  } else {
    return (
      <Container theme={theme}>
        <div
          className="w-[680px] m-auto"
          style={{ marginBottom: '28px', marginTop: '24px' }}
        >
          <div className="flex gap-4 items-center">
            <div className="px-[18px] py-[12px] flex items-center justify-center gap-1 rounded-md border-[2px] border-[#FFFFFF00] bg-[#4949490D]">
              <ChevronLeft />
            </div>
            <div className="w-full text-left text-[#494949] text-base font-normal font-['Nunito Sans'] leading-relaxed">
              Idea Workshopping
            </div>
          </div>
        </div>

        {loading === true ? (
          <CircularIndeterminateLoader text="Loading..." color="white" />
        ) : (
          <div className="flex flex-row justify-center px-4 md:px-12">
            <div className=" max-w-[680px]">
              <IdeaOverview selectedCard={data} />
              <div className="h-[0px] border border-[#dad8d9] mb-10"></div>
              <Comments>
                <div className="text-black text-lg font-bold font-['Nunito Sans'] leading-tight">
                  Comment Feed: {comments.length}
                </div>
                <Form>
                  <CommentForm
                    selectedCard={data}
                    comments={comments}
                    renderNewComment={renderNewComment}
                  />
                </Form>
                <DisplayComments selectedCard={data} comments={comments} />
              </Comments>
            </div>
          </div>
        )}
      </Container>
    );
  }
}
