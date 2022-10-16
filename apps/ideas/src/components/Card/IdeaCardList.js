import React from 'react';
import CircularIndeterminateLoader from '../Loader/CircularIndeterminateLoader';
import IdeaCard from './IdeaCard';
import StyledIdeaCards from './StyledIdeaCards/StyledIdeaCards';
import { TextCardTitleBox } from './StyledIdeaCard';
import StyledCardsWrapper from '../CardsWrapper/StyledCardsWrapper';
import axios from 'axios';
import { env } from '../../utils/EnvironmentVariables';
import ProjectFilter from './ProjectFilter/ProjectFilter';
import Grid from '@mui/material/Grid';

function IdeaCardList() {
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [sortedCards, setSortedCards] = React.useState([]);

  const sortingConfigs = [
    { value: 'default', label: '' },
    {
      value: 'descending:updated_at',
      label: 'Last Updated: Most Recent to Least Recent',
    },
    {
      value: 'ascending:updated_at',
      label: 'Last Updated: Least Recent to Most Recent',
    },
    {
      value: 'descending:hourCommitmentMin',
      label: 'Minimum Time Commitment: Greatest to Least',
    },
    {
      value: 'ascending:hourCommitmentMin',
      label: 'Minimum Time Commitment: Least to Greatest',
    },
  ];

  const handleSetSortedCards = (sortedCardList) => {
    setSortedCards(sortedCardList);
  };

  React.useEffect(() => {
    axios
      .get(`${env().API_URL}/idea-cards`, {
        withCredentials: true,
      })
      .then((response) => {
        const getCards = response.data.map((item) => {
          return item;
        });

        setLoading(false);
        console.log(JSON.stringify(getCards, null, 2));
        setCards(getCards);
      });
  }, []);

  return (
    <StyledIdeaCards>
      {loading === true ? (
        ''
      ) : (
        <ProjectFilter
          sortingConfigs={sortingConfigs}
          cards={cards}
          handleSetSortedCards={handleSetSortedCards}
        />
      )}
      <StyledCardsWrapper>
        {sortedCards.length > 0
          ? sortedCards.map((item) => {
              return (
                <IdeaCard
                  key={item.id}
                  cards={item}
                  setSelectedCard={setSelectedCard}
                />
              );
            })
          : cards.map((item) => {
              return (
                <IdeaCard
                  key={item.id}
                  cards={item}
                  setSelectedCard={setSelectedCard}
                />
              );
            })}
        {loading ? (
          <CircularIndeterminateLoader text="Loading..." color="black" />
        ) : (
          ''
        )}
      </StyledCardsWrapper>
    </StyledIdeaCards>
  );
}

export default IdeaCardList;
