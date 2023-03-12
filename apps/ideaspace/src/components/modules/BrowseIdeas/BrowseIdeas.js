import React from 'react';
import CircularIndeterminateLoader from '../Loader/CircularIndeterminateLoader';
import IdeaCard from './IdeaCard/IdeaCard';
import axios from 'axios';
import SortableDropdown from '../../common/SortableDropdown/SortableDropdown';
import Dropdown from '@devlaunchers/components/components/organisms/Dropdown';
import { PageWrapper, CardsWrapper, FilterDiv } from './StyledBrowseIdeas';
import { Drop } from 'phosphor-react';

function BrowseIdeas() {
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [sortedCards, setSortedCards] = React.useState([]);

  //const defaultOptions = [<option key="0"></option>];
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
  const options = [
    {
      text: 'Recent Activity',
    },
    {
      text: 'Recent Ideas',
    },
    {
      text: 'Time Commitment',
    },
  ];

  const sortElements = (selectedSortCriterion) => {
    console.log(`selected sort criterion is ${selectedSortCriterion}`);
    let selectedSortingConfig = sortingConfigs.filter(
      (configOption) => configOption.label === selectedSortCriterion
    );
    console.log(
      `selectedSortingConfig is ${JSON.stringify(
        selectedSortingConfig,
        null,
        2
      )}`
    );
    console.log(`sortingConfig value is ${selectedSortingConfig.value}`);
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
    console.log(`cardsClone is ${JSON.stringify(cardsClone, null, 2)}`);
    setCards(cardsClone);
  };

  const dummyFunction = (Text) => {
    console.log(`Call back function: ${Text}`);
    sortElements(Text);
  };

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
            <Dropdown
              options={options}
              callbackFn={dummyFunction}
              title="Sort By"
              width="lg"
            />
            {/* <label htmlFor="sortBy">Sort By</label>
            <SortableDropdown
              sortingConfigs={sortingConfigs}
              elements={cards}
              defaultOptions={defaultOptions}
              handleSetSortedElements={setSortedCards}
            /> */}
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
