import React from 'react';
import { FilterDiv, ButtonDiv } from './StyledProjectFilter';
import Button from '../../common/Button/Button';

const ProjectFilter = ({ sortingConfigs, cards, handleSetSortedCards }) => {
  const [sortOrderAndCriteria, setSortOrderAndCriteria] = React.useState({});
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
          <option
            key={index}
            dataisascending={option.isAscending}
            value={option.value}
          >
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
  }, []);

  const sortIdeaCards = (sortOrderAndCriteria) => {
    console.log(
      `sortOrderAndCriteria is ${JSON.stringify(sortOrderAndCriteria, null, 2)}`
    );
    const sortedCardsClone = JSON.parse(JSON.stringify(sortedCards));
    if (sortOrderAndCriteria.isAscending) {
      sortedCardsClone.sort((a, b) => {
        return a.value < b.value ? -1 : a.value > b.value ? 1 : 0;
      });
    } else {
      sortedCardsClone.sort((a, b) => {
        return a.value > b.value ? -1 : a.value < b.value ? 1 : 0;
      });
    }
    console.log(sortedCardsClone);
    sortedCardsClone.forEach((element) => {
      console.log(element);
    });
    handleSetSortedCards(sortedCardsClone);
  };

  const handleSetSortOrderAndCriteriaChange = (e) => {
    console.log(
      `e.target.value is ${e.target.value}, e.target.dataisascending is
        ${e.target.dataisascending}, e.target.id is ${e.target.id}
      `
    );
    if (e.target.id === 'clearSort' || e.target.value === 'default') {
      setSortOrderAndCriteria('');
      const emptyArray = [];
      setSortedCards(emptyArray);
      return;
    }
    const sortOrderAndCriteriaSelection = {
      value: e.target.value,
      isAscending: e.target.dataisascending,
    };
    setSortOrderAndCriteria(sortOrderAndCriteriaSelection);
    sortIdeaCards(sortOrderAndCriteria);
  };

  return (
    <FilterDiv>
      <label for="sortBy">Sort By</label>
      <select
        name="sortBy"
        id="sortBy"
        onChange={handleSetSortOrderAndCriteriaChange}
        defaultValue={sortOrderAndCriteria.value}
        value={sortOrderAndCriteria.value}
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
