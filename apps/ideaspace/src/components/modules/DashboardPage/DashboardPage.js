import React from 'react';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import { atoms } from '@devlaunchers/components/src/components';
import SignInSection from '../../common/SignInSection/SignInSection';
import CircularIndeterminateLoader from '../Loader/CircularIndeterminateLoader'
import Stats from './Stats/Stats';
import Ideas from './Ideas/Ideas';
import { cleanDataList } from '../../../utils/StrapiHelper';
import { agent } from '@devlaunchers/utility';

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

  React.useEffect(async () => {
    if (isAuthenticated) {
      const data = cleanDataList(await agent.Ideas.get(
        new URLSearchParams(`populate=*`)));

        const cards = data.map((item) => {
          item.comments = cleanDataList(item.comments.data);
          return {
            ...item,
            mostRecentCommentTime: new Date(
              item.comments[0]?.updated_at
            ).getTime(),
          };
        });

        setLoading(false);
        setSourceCards(cards);
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
        <atoms.Typography type='h4' >
          Everything about your ideas in one place.
        </atoms.Typography>
      </HeadWapper>

      {!isAuthenticated ? (
        <SignInSection
          label='Please sign in to view your dashboard!'
          redirectURL={process.env.NEXT_PUBLIC_FRONT_END_URL + '/ideaspace/dashboard'}
        />
      ) : (
        <PageWrapper>
          {loading === true ? (
            <CircularIndeterminateLoader text="Loading..." color="black" />
          ) : (
            <>
              <Stats
                totalCard={cards}
              />

              <Ideas
                totalCard={cards}
              />
            </>
          )}
        </PageWrapper>
      )
      }
    </>
  );
}

export default DashboardPage;
