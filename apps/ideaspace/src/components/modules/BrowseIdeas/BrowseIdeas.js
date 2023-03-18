import React from 'react';
import CircularIndeterminateLoader from '../Loader/CircularIndeterminateLoader';
import IdeaCard from './IdeaCard/IdeaCard';
import axios from 'axios';
import Dropdown from '@devlaunchers/components/components/organisms/Dropdown';
import { PageWrapper, CardsWrapper, FilterDiv } from './StyledBrowseIdeas';

function BrowseIdeas() {
  const [cards, setCards] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

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

  const sortCards = (selectedSortCriterion) => {
    let selectedSortingConfig = sortingConfigs.filter(
      (configOption) => configOption.label === selectedSortCriterion
    );
    const cardsClone = JSON.parse(JSON.stringify(cards));
    if (selectedSortingConfig[0].isAscending) {
      cardsClone.sort((a, b) => {
        return a[selectedSortingConfig[0].value] <
          b[selectedSortingConfig[0].value]
          ? -1
          : a[selectedSortingConfig[0].value] >
            b[selectedSortingConfig[0].value]
          ? 1
          : 0;
      });
    } else {
      cardsClone.sort((a, b) => {
        return a[selectedSortingConfig[0].value] >
          b[selectedSortingConfig[0].value]
          ? -1
          : a[selectedSortingConfig[0].value] <
            b[selectedSortingConfig[0].value]
          ? 1
          : 0;
      });
    }
    setCards(cardsClone);
  };

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
            <Dropdown
              options={sortingConfigs.map((element) => {
                return { text: element.label };
              })}
              callbackFn={sortCards}
              title="Sort By"
              width="lg"
            />
          </FilterDiv>
          <CardsWrapper>
            {cards.map((item) => {
              return <IdeaCard key={item.id} cards={item} />;
            })}
          </CardsWrapper>
        </div>
      )}
    </PageWrapper>
  );
}

export default BrowseIdeas;
