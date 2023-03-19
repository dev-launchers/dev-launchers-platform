import React from 'react';

const SortableDropdown = ({
  sortingConfigs,
  elements,
  defaultOptions,
  handleSetSortedElements,
  style,
}) => {
  const [sortOrderAndCriteria, setSortOrderAndCriteria] = React.useState('');
  const [dropDownOptions, setDropDownOptions] = React.useState([]);
  const [sortedElements, setSortedElements] = React.useState([]);
  const [showOptions, setShowOptions] = React.useState([]);

  React.useEffect(() => {
    const getDropDownOptions =
      sortingConfigs.length > 0 &&
      sortingConfigs.map((option, index) => {
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

    setDropDownOptions(getDropDownOptions);

    if (defaultOptions[0].key === "-1"){
      setShowOptions(defaultOptions);
    } else {
      setShowOptions(getDropDownOptions);
    }
    
    if (elements && elements.length > 0) {
      const elementsClone = JSON.parse(JSON.stringify(elements));
      setSortedElements(elementsClone);
    }
  }, [elements]);

  React.useEffect(() => {
    if (dropDownOptions.length) {
      sortElements(dropDownOptions[0].props.value);
    }
  }, [dropDownOptions]);

  const sortElements = (selectedSortOrderAndCriteria) => {
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
    if (!e.target.value) {
      return;
    }
    setSortOrderAndCriteria(e.target.value);
    sortElements(e.target.value);

  };

  const handleClick = (e) => {
    if (defaultOptions[0].key === "-1") {
      setShowOptions(dropDownOptions);
      return;
    }
  };

  return (
    <select
      name="sortBy"
      id="sortBy"
      onClick={handleClick}
      onChange={handleSetSortOrderAndCriteriaChange}
      value={sortOrderAndCriteria}
      style={style}
    >
      {showOptions}
    </select>
  );
};

export default SortableDropdown;
