import React from 'react'
import axios from "axios";
import Grid from '@mui/material/Grid';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import SignInButton from "../../common/SignInButton/SignInButton";
import CircularIndeterminateLoader from '../Loader/CircularIndeterminateLoader'
import Stats from './Stats/Stats';
import SortableDropdown from '../../common/SortableDropdown/SortableDropdown';
import IdeaCard from './IdeaCard/IdeaCard'
import submitImage from "../../../images/submitButton.svg";
import Link from 'next/link';
import RainbowBar from '../../common/RainbowBar';

import {
  PageWrapper,
  Title,
  RainbowArea,
  StyledRanbow,
  Slogan,
  SectionTitle,
  IdeaCardWrapper,
  SorterDiv,
  Button,
  CardWapper,
  Headline,
  Description,
  Container,
  Wrapper
} from './StyledDashboardPage';


function DashboardPage() {
  //const isAuthenticated = true;
  let { userData, setUserData, isAuthenticated } = useUserDataContext();
  if (process.env.NEXT_PUBLIC_NAME == "DEVELOPMENT") isAuthenticated = true;

  const [loading, setLoading] = React.useState(true);
  const [sourceCards, setSourceCards] = React.useState([]);
  const [cards, setCards] = React.useState([]);
  const [sortedCards, setSortedCards] = React.useState([]);


  const dropDownStyle = { width: "13rem", borderRadius: "8px", padding: "6px 8px", fontSize: "17px", outline: "none" };
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
    <div>
      {!isAuthenticated ?
        <div>
          <Headline>Dev Ideas</Headline>
          <Description>
            Everything about your ideas in one place.<br />
          </Description>
          <Wrapper>
            <div style={{ color: "white" }}>Please sign in to view your dashboard!</div>
            <br />
            <div><SignInButton redirectUrl="https://devlaunchers.org/ideaspace/dashboard" /></div>
          </Wrapper>
          <br />
        </div>
        :
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
      }
    </div>
  );
}

export default DashboardPage;
