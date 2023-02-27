import React from 'react'
import CircularIndeterminateLoader from '../Loader/CircularIndeterminateLoader'
import IdeaCard from './IdeaCard/IdeaCard'
import axios from "axios";
import SortableDropdown from '../../common/SortableDropdown/SortableDropdown';

import { PageWrapper, CardsWrapper, FilterDiv } from './StyledBrowseIdeas'


function BrowseIdeas() {
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [sortedCards, setSortedCards] = React.useState([]);
  
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

  /*const handleSetSortedCards = (sortedCardList) => {
    setSortedCards(sortedCardList);
  };*/

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
    <PageWrapper>
      {loading === true ? (
        <CircularIndeterminateLoader text="Loading..." color="black" />
      ) : (
        <div>
          <FilterDiv>
            <label htmlFor="sortBy">Sort By</label>
            <SortableDropdown
                sortingConfigs={sortingConfigs}
                elements={cards}
                defaultOptions={defaultOptions}
                handleSetSortedElements={setSortedCards}
              />
          </FilterDiv>
          <CardsWrapper>
            {sortedCards.map((item) => {
              return (
                <IdeaCard
                  key={item.id}
                  cards={item}
                />
              );
            })}
          </CardsWrapper>
        </div>
      )}
    </PageWrapper>
  );
}

export default BrowseIdeas;
