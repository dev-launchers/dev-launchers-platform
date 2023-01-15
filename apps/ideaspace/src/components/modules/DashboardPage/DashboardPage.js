import React from 'react';
import axios from "axios";
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import { atoms } from '@devlaunchers/components/src/components';
import RainbowBar from '../../../../../website/src/components/common/RainbowBar';
import SignInSection from '../../common/SignInSection/SignInSection';
import CircularIndeterminateLoader from '../Loader/CircularIndeterminateLoader'
import Stats from './Stats/Stats';
import Ideas from './Ideas/Ideas'

import {
  HeadWapper,
  Headline,
  StyledRanbow,
  PageWrapper,
} from './StyledDashboardPage';

function DashboardPage() {

  let { userData, setUserData, isAuthenticated } = useUserDataContext();
  //if (process.env.NEXT_PUBLIC_NAME == "DEVELOPMENT") isAuthenticated = true;

  const [loading, setLoading] = React.useState(true);
  const [sourceCards, setSourceCards] = React.useState([]);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    //setUserData({ ...userData, id: 2 });
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
            <Grid container rowSpacing={{ xs: 8, sm: 16 }}>
              <Grid item sm={12} md={12} lg={12}>
                <Title>IdeaSpace Dashboard</Title>
                <RainbowArea>
                  <StyledRanbow>
                    <RainbowBar width="100%" />
                  </StyledRanbow>
                </RainbowArea>
                <Slogan>Everything about your ideas in one place.</Slogan>
              </Grid>


              <Grid item sm={12} md={12} lg={12}>
                <SectionTitle>My Stats</SectionTitle>
                <Stats
                  totalData={cards}
                />
              </Grid>

              <Grid container item sm={12} md={12} lg={12} columnSpacing={6} rowSpacing={4}>
                <Grid item sm={6} md={6} lg={4}>
                  <SectionTitle>My Ideas</SectionTitle>
                </Grid>
                <Grid item sm={6} md={6} lg={8}>
                  <SorterDiv>
                    <SortableDropdown
                      sortingConfigs={sortingConfigs}
                      elements={cards}
                      defaultOptions={defaultOptions}
                      handleSetSortedElements={setSortedCards}
                      style={dropDownStyle}
                    />
                  </SorterDiv>
                </Grid>

                <Grid item sm={12} md={12} lg={12}>
                  <IdeaCardWrapper>
                    {sortedCards.map((item) => {
                      return (
                        <IdeaCard
                          cards={item}
                          key={item.id}
                        />
                      );
                    })
                    }

                    <CardWapper key="submitButton">
                      <Link href="/ideaspace/submit">
                        <Button>
                          <img
                            alt="submit_image"
                            src={submitImage}
                            style={{ width: "100%", height: "100%" }}
                          />
                        </Button>
                      </Link>
                    </CardWapper>
                  </IdeaCardWrapper>
                </Grid>


              </Grid>
            </Grid>
          )}
        </PageWrapper>
      )
      }
    </>
  );
}

export default DashboardPage;
