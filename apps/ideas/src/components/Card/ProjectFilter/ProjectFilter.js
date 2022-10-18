import React from 'react';
import { FilterDiv, ButtonDiv } from './StyledProjectFilter';
import Button from '../../common/Button/Button';

const ProjectFilter = ({ sortingConfigs, cards, handleSetSortedCards }) => {
  const [sortOrderAndCriteria, setSortOrderAndCriteria] = React.useState('');
  const [dropDownOptions, setDropDownOptions] = React.useState([]);
  const [sortedCards, setSortedCards] = React.useState([]);

  React.useEffect(() => {
    console.log(
      `sortingConfigs are ${JSON.stringify(sortingConfigs, null, 2)}`
    );
    const getDropDownOptions =
      sortingConfigs.length > 0 &&
      sortingConfigs.map((option, index) => {
        console.log(`option in map function is `, option);
        return (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        );
      });
    console.log(
      `getDropDownOptions is ${JSON.stringify(getDropDownOptions, null, 2)}`
    );
    setDropDownOptions(getDropDownOptions);
    if (cards && cards.length > 0) {
      const ideaCardsClone = JSON.parse(JSON.stringify(cards));
      setSortedCards(ideaCardsClone);
    }
  }, [cards]);

  const sortIdeaCards = (selectedSortOrderAndCriteria) => {
    console.log(selectedSortOrderAndCriteria);
    let isAscending = selectedSortOrderAndCriteria.includes('ascending');
    let criteria = isAscending
      ? selectedSortOrderAndCriteria.substring(10)
      : selectedSortOrderAndCriteria.substring(11);
    console.log(`criteria is ${criteria}`);
    console.log(`sortedCards is `, sortedCards);
    const sortedCardsClone = JSON.parse(JSON.stringify(sortedCards));
    console.log(`sortedCardsClone is `, sortedCardsClone);
    if (isAscending) {
      sortedCardsClone.sort((a, b) => {
        return a[criteria] < b[criteria]
          ? -1
          : a[criteria] > b[criteria]
          ? 1
          : 0;
      });
    } else {
      sortedCardsClone.sort((a, b) => {
        return a[criteria] > b[criteria]
          ? -1
          : a[criteria] < b[criteria]
          ? 1
          : 0;
      });
    }
    console.log(sortedCardsClone);
    sortedCardsClone.forEach((element) => {
      console.log(element);
    });
    handleSetSortedCards(sortedCardsClone);
  };

  const handleSetSortOrderAndCriteriaChange = (e) => {
    console.log(`e.target.value is ${e.target.value}`);
    if (e.target.id === 'clearSort' || e.target.value === 'default') {
      setSortOrderAndCriteria('');
      const emptyArray = [];
      setSortedCards(emptyArray);
      handleSetSortedCards(sortedCards);
      return;
    }
    setSortOrderAndCriteria(e.target.value);
    sortIdeaCards(e.target.value);
  };

  return (
    <FilterDiv>
      <label for="sortBy">Sort By</label>
      <select
        name="sortBy"
        id="sortBy"
        onChange={handleSetSortOrderAndCriteriaChange}
        defaultValue={sortOrderAndCriteria}
        value={sortOrderAndCriteria}
      >
        {dropDownOptions}
      </select>
      <Button
        name="clearSort"
        id="clearSort"
        type="button"
        style={{ marginTop: '10px' }}
        value=""
        onClick={handleSetSortOrderAndCriteriaChange}
      >
        Clear Sorting Criteria
      </Button>
    </FilterDiv>
  );
};

export default ProjectFilter;
