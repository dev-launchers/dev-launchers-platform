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
        <ArchivedIdea />

        <div className="flex pt-[44px] pb-[14px] pl-[379px] pr-[48px] items-center gap-4">
          <div className="px-[18px] py-[12px] flex items-center justify-center gap-1 rounded-md border-[2px] border-[#FFFFFF00] bg-[#4949490D]">
            <ChevronLeft />
          </div>
          <div className="w-full text-left text-[#494949] text-base font-normal font-['Nunito Sans'] leading-relaxed">
            Idea Workshopping
          </div>
        </div>

        {loading === true ? (
          <CircularIndeterminateLoader text="Loading..." color="white" />
        ) : (
          // <div className="flex flex-row justify-center">
          //   {/* <Wrapper> */}
          //     <div className=''>
          //       <IdeaOverview selectedCard={data} />
          //       <Comments>
          //         <h5 style={{ textAlign: 'left' }}>
          //           COMMENT FEED: {comments.length}
          //         </h5>
          //         <Form>
          //           <CommentForm
          //             selectedCard={data}
          //             comments={comments}
          //             renderNewComment={renderNewComment}
          //           />
          //         </Form>
          //         <DisplayComments selectedCard={data} comments={comments} />
          //       </Comments>
          //     </div>
          //   {/* </Wrapper> */}
          // </div>
          <div className="flex flex-row justify-center px-4 md:px-12 lg:px-[300px] xl:px-[380px]">
            <div className=" max-w-[690px]">
              <IdeaOverview selectedCard={data} />
              {/* <Comments>
                  <h5 className="text-left">
                    COMMENT FEED: {comments.length}
                  </h5>
                  <Form>
                    <CommentForm
                      selectedCard={data}
                      comments={comments}
                      renderNewComment={renderNewComment}
                    />
                  </Form>
                  <DisplayComments selectedCard={data} comments={comments} />
                </Comments> */}
            </div>
          </div>
        )}
      </Container>
    );
  }
}
