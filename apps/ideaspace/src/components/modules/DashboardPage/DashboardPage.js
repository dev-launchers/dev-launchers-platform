import React from 'react'
import axios from "axios";
import Grid from '@mui/material/Grid';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import SignInSection from '../../common/SignInSection/SignInSection';
import CircularIndeterminateLoader from '../Loader/CircularIndeterminateLoader'
import Stats from './Stats/Stats';
import SortableDropdown from '../../common/SortableDropdown/SortableDropdown';
import IdeaCard from './IdeaCard/IdeaCard'
import submitImage from "../../../images/submitButton.svg";
import Link from 'next/link';
import RainbowBar from '../../../../../website/src/components/common/RainbowBar';
import { atoms } from '@devlaunchers/components/src/components';

import {
  HeadWapper,
  Headline,
  StyledRanbow,
  PageWrapper,
  IdeaCardWrapper,
  SubmitButton,
} from './StyledDashboardPage';


function DashboardPage() {

  let { userData, setUserData, isAuthenticated } = useUserDataContext();
  //console.log("dashpage", userData);
  if (process.env.NEXT_PUBLIC_NAME == "DEVELOPMENT") isAuthenticated = true;

  const [loading, setLoading] = React.useState(true);
  const [sourceCards, setSourceCards] = React.useState([]);
  const [cards, setCards] = React.useState([]);
  const [sortedCards, setSortedCards] = React.useState([]);

  const dropDownStyle = { width: "13rem", borderRadius: "8px", padding: "6px 8px", fontSize: "1rem", outline: "none", marginTop: '1rem' };
  const defaultOptions = [<option key='-1'>Sort By</option>];
  const sortingConfigs = [
    {
      value: 'published_at',
      label: 'Date Posted',
      isAscending: false,
    },
    {
      value: 'updated_at',
      label: 'Date Updated',
      isAscending: false,
    },
    {
      value: 'mostRecentCommentTime',
      label: 'Recent Activity',
      isAscending: false,
    },
  ];

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
    //setCards(sourceCards.filter((item) => true));
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
              <atoms.Box flexDirection='column'>
                <atoms.Typography type='h4' style={{ textAlign: 'left' }}>My Stats</atoms.Typography>
                <Stats
                  totalData={cards}
                />
              </atoms.Box>

              <Grid container style={{ marginTop: '2rem' }} rowSpacing={2}>
                <Grid item xs={6} lg={4}>
                  <atoms.Typography type='h4' style={{ textAlign: 'left' }}>My Ideas</atoms.Typography>
                </Grid>
                <Grid item xs={6} lg={8}>
                  <atoms.Box flexDirection='column' alignItems='flex-end' float='right'>
                    <SortableDropdown
                      sortingConfigs={sortingConfigs}
                      elements={cards}
                      defaultOptions={defaultOptions}
                      handleSetSortedElements={setSortedCards}
                      style={dropDownStyle}
                    />
                  </atoms.Box>
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

                    <atoms.Box flexDirection='column'>
                      <Link href="/ideaspace/submit">
                        <SubmitButton style={{ cursor: 'pointer' }}>
                          <img
                            alt="submit_image"
                            src={submitImage}
                            style={{ width: "100%", height: "100%" }}
                          />
                        </SubmitButton>
                      </Link>
                    </atoms.Box>
                  </IdeaCardWrapper>
                </Grid>


              </Grid>
            </>
          )}
        </PageWrapper>
      )
      }
    </>
  );
}

export default DashboardPage;
