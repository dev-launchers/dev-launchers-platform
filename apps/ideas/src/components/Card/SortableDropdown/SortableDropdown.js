import React from 'react';
import { FilterDiv } from './StyledSortableDropdown';

const SortableDropdown = ({
  sortingConfigs,
  elements,
  handleSetSortedElements,
}) => {
  const [sortOrderAndCriteria, setSortOrderAndCriteria] = React.useState('');
  const [dropDownOptions, setDropDownOptions] = React.useState([]);
  const [sortedElements, setSortedElements] = React.useState([]);

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
            value={
              option.isAscending
                ? `ascending:${option.value}`
                : `descending:${option.value}`
            }
          >
            {option.label}
          </option>
        );
      });
    console.log(
      `getDropDownOptions is ${JSON.stringify(getDropDownOptions, null, 2)}`
    );
    setDropDownOptions(getDropDownOptions);
    if (elements && elements.length > 0) {
      const elementsClone = JSON.parse(JSON.stringify(elements));
      setSortedElements(elementsClone);
    }
  }, [elements]);

  const sortElements = (selectedSortOrderAndCriteria) => {
    console.log(
      `selectedSortOrderAndCriteria is ${selectedSortOrderAndCriteria}`
    );
    //Checks for concatenated string resulting from isAscending sortingConfig and value sortingConfig
    //Example: sortingConfig isAscending === true and sortingConfig value === 'hourCommitmentMin'
    //Result: ascending:hourCommitmentMin
    let isAscending = selectedSortOrderAndCriteria.includes('ascending');
    let criteria = isAscending
      ? selectedSortOrderAndCriteria.substring(10)
      : selectedSortOrderAndCriteria.substring(11);
    const sortedElementsClone = JSON.parse(JSON.stringify(sortedElements));
    if (isAscending) {
      sortedElementsClone.sort((a, b) => {
        return a[criteria] < b[criteria]
          ? -1
          : a[criteria] > b[criteria]
          ? 1
          : 0;
      });
    } else {
      sortedElementsClone.sort((a, b) => {
        return a[criteria] > b[criteria]
          ? -1
          : a[criteria] < b[criteria]
          ? 1
          : 0;
      });
    }
    handleSetSortedElements(sortedElementsClone);
  };

  const handleSetSortOrderAndCriteriaChange = (e) => {
    if (e.target.value === 'default' || !e.target.value) {
      return;
    }
    setSortOrderAndCriteria(e.target.value);
    sortElements(e.target.value);
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

export default SortableDropdown;
