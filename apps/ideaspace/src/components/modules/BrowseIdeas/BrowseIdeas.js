import React from 'react'
import CircularIndeterminateLoader from '../Loader/CircularIndeterminateLoader'
import axios from "axios";
import { atoms } from '@devlaunchers/components/src/components';
import SortableDropdown from '../../common/SortableDropdown/SortableDropdown';
import IdeaCard from '../../common/IdeaCard/IdeaCard';
import BackButton from '../../common/BackButton/BackButton';

import {
  PageWrapper,
  HeadWapper,
  Headline,
  StyledRanbow,
  IdeaCardWrapper,
} from './StyledBrowseIdeas';

function BrowseIdeas() {
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [sortedCards, setSortedCards] = React.useState([]);

  const dropDownStyle = { width: "13rem", borderRadius: "8px", padding: "6px 8px", fontSize: "1rem", outline: "none" };
  const defaultOptions = [<option key='0'></option>];
  const sortingConfigs = [
    {
      value: 'mostRecentCommentTime',
      label: 'Recent Activity',
      isAscending: false,
    },
    {
      value: 'updated_at',
      label: 'Recent Ideas',
      isAscending: false,
    },
    {
      value: 'hourCommitmentMin',
      label: 'Time Commitment',
      isAscending: true,
    },
  ];

  React.useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards`, {
        withCredentials: true,
      })
      .then((response) => {
        const getCards = response.data.map((item) => {
          return {
            ...item,
            mostRecentCommentTime: new Date(
              item.comments[0]?.updated_at
            ).getTime(),
          };
        });

        setLoading(false);
        setCards(getCards);
      });
  }, []);

  return (
    <>
      <HeadWapper>
        <Headline>Browse Ideas</Headline>
        <StyledRanbow>
          <atoms.Layer hasRainbowBottom />
        </StyledRanbow>
        <BackButton />
        <atoms.Typography type='h4' >
          Want to help developing an idea?<br />
          <atoms.Typography type='p' style={{ fontSize: '1.3rem' }}> Check out these ideas submitted by other Dev Launchers!</atoms.Typography>
        </atoms.Typography>
      </HeadWapper>

      <PageWrapper>
        {loading === true ? (
          <CircularIndeterminateLoader text="Loading..." color="black" />
        ) : (
          <div>
            <atoms.Box alignItems='center' justifyContent='space-between' width='100%'>
              <atoms.Typography type='h4' style={{ textAlign: 'left' }}>{sortedCards.length} Ideas</atoms.Typography>
              <SortableDropdown
                sortingConfigs={sortingConfigs}
                elements={cards}
                defaultOptions={defaultOptions}
                handleSetSortedElements={setSortedCards}
                style={dropDownStyle}
              />
            </atoms.Box>

            <IdeaCardWrapper>
              {sortedCards.map((item) => {
                return (
                  <IdeaCard
                    key={item.id}
                    cards={item}
                    cardType="browse"
                  />
                );
              })}
            </IdeaCardWrapper>
          </div>
        )}
      </PageWrapper>
    </>
  );
}

export default BrowseIdeas;
