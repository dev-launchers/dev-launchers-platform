import React from 'react';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import { atoms } from '@devlaunchers/components/src/components';
import { agent } from '@devlaunchers/utility';
import SignInSection from '../../common/SignInSection/SignInSection';
import CircularIndeterminateLoader from '../Loader/CircularIndeterminateLoader';
import Stats from './Stats/Stats';
import Ideas from './Ideas/Ideas';
import { cleanDataList, cleanData } from '../../../utils/StrapiHelper';
import DeleteSuccessAlert from '../../common/SubmissionAlert/DeleteSuccessAlert';

import {
  HeadWapper,
  Headline,
  StyledRanbow,
  PageWrapper,
} from './StyledDashboardPage';

function DashboardPage() {
  let { userData, isAuthenticated } = useUserDataContext();

  const [loading, setLoading] = React.useState(true);
  const [sourceCards, setSourceCards] = React.useState([]);
  const [cards, setCards] = React.useState([]);
  const [showDeleteAlertSuccess, setShowDeleteAlertSuccess] =
    React.useState(false);

  const showAlert = React.useCallback(() => {
    if (sessionStorage.getItem('showDeleteAlertSuccess') === 'true') {
      setShowDeleteAlertSuccess(true);
      sessionStorage.removeItem('showDeleteAlertSuccess');
    }
  }, []);

  React.useEffect(async () => {
    if (isAuthenticated) {
      showAlert();
      const data = cleanDataList(
        await agent.Ideas.get(
          new URLSearchParams(
            `populate=deep&filters[author][id][$eq]=${userData.id}&filters[status][$ne]=deleted`
          )
        )
      );
      const allCards = data.map((item) => {
        if (item.comments === undefined) item.comments = [];
        else item.comments = cleanDataList(item.comments.data);

        if (item.author.data !== null) {
          item.author = cleanData(item.author.data);
        }

        return {
          ...item,
          mostRecentCommentTime: new Date(
            item.comments[0]?.updated_at
          ).getTime(),
        };
      });

      setLoading(false);
      setSourceCards(allCards);
    }
  }, [isAuthenticated]);

  React.useEffect(() => {
    setCards(sourceCards.filter((item) => item?.author?.id == userData.id));
  }, [sourceCards, userData]);

  return (
    <>
      <HeadWapper>
        <Headline>IdeaSpace Dashboard</Headline>
        <StyledRanbow>
          <atoms.Layer hasRainbowBottom />
        </StyledRanbow>
        <atoms.Typography type="h4">
          Everything about your ideas in one place.
        </atoms.Typography>
      </HeadWapper>

      {!isAuthenticated ? (
        <SignInSection
          label="Please sign in to view your dashboard!"
          redirectURL={
            process.env.NEXT_PUBLIC_FRONT_END_URL + '/ideaspace/dashboard'
          }
        />
      ) : (
        <PageWrapper>
          {loading === true ? (
            <CircularIndeterminateLoader text="Loading..." color="black" />
          ) : (
            <>
              <Stats totalCard={cards} />
              <Ideas totalCard={cards} />
              {showDeleteAlertSuccess && (
                <DeleteSuccessAlert
                  onClose={() => setShowDeleteAlertSuccess(false)}
                />
              )}
            </>
          )}
        </PageWrapper>
      )}
    </>
  );
}

export default DashboardPage;
