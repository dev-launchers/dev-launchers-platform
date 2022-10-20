import React from 'react';
import { FilterDiv } from './StyledProjectFilter';

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
    console.log(
      `selectedSortOrderAndCriteria is ${selectedSortOrderAndCriteria}`
    );
    //Pass in drop down values as a string starting with ascending or descending
    //Then add a : followed by the value to sort by
    //Ex: ascending:updated_at
    let isAscending = selectedSortOrderAndCriteria.includes('ascending');
    let criteria = isAscending
      ? selectedSortOrderAndCriteria.substring(10)
      : selectedSortOrderAndCriteria.substring(11);
    const sortedCardsClone = JSON.parse(JSON.stringify(sortedCards));
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
    handleSetSortedCards(sortedCardsClone);
  };

  const handleSetSortOrderAndCriteriaChange = (e) => {
    if (e.target.value === 'default' || !e.target.value) {
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
        value={sortOrderAndCriteria}
      >
        {dropDownOptions}
      </select>
    </FilterDiv>
  );
};

export default ProjectFilter;
