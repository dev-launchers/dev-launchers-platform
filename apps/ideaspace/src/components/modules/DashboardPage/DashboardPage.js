import React from 'react';
import axios from "axios";
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import { atoms } from '@devlaunchers/components/src/components';
import RainbowBar from '../../../../../website/src/components/common/RainbowBar';
import SignInSection from '../../common/SignInSection/SignInSection';
import CircularIndeterminateLoader from '../Loader/CircularIndeterminateLoader'
import Stats from './Stats/Stats';
import Ideas from './Ideas/Ideas';

import {
  HeadWapper,
  Headline,
  StyledRanbow,
  PageWrapper,
} from './StyledDashboardPage';

function DashboardPage() {

  let { userData, setUserData, isAuthenticated } = useUserDataContext();
  if (process.env.NEXT_PUBLIC_NAME == 'DEVELOPMENT') {
    isAuthenticated = true;

    React.useEffect(() => {
      setUserData({ ...userData, id: 2 });
    }, []);
  }

  const [loading, setLoading] = React.useState(true);
  const [sourceCards, setSourceCards] = React.useState([]);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    {
      isAuthenticated ?
        axios
          .get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards`, {
            withCredentials: true,
          })
          .then((response) => {
            const cards = response.data.map((item) => {
              return {
                ...item,
                mostRecentCommentTime: new Date(
                  item.comments[0]?.updated_at
                ).getTime(),
              };
            });

            setLoading(false);
            setSourceCards(cards);
          })
        :
        ''
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
          <RainbowBar width="100%" height="5px" />
        </StyledRanbow>
        <atoms.Typography type='h4' >
          Everything about your ideas in one place.
        </atoms.Typography>
      </HeadWapper>

      {!isAuthenticated ? (
        <SignInSection
          label='Please sign in to view your dashboard!'
          redirectURL='https://devlaunchers.org/ideaspace/dashboard'
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
