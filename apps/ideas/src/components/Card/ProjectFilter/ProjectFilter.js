import React from "react";
import { FilterDiv, ButtonDiv } from "./StyledProjectFilter";
import Button from "../../common/Button/Button";

const ProjectFilter = ({
  handleSetLastUpdatedSortOrderChange,
  lastUpdatedSortOrder,
}) => {
  return (
    <FilterDiv>
      <label for="lastUpdated">Sort By Idea Last Updated Date</label>
      <select
        name="lastUpdated"
        id="lastUpdated"
        onChange={handleSetLastUpdatedSortOrderChange}
        defaultValue={lastUpdatedSortOrder}
        value={lastUpdatedSortOrder}
      >
        <option value=""></option>
        <option value="descending">Most Recent to Least Recent</option>
        <option value="ascending">Least Recent to Most Recent</option>
      </select>
      <Button
        name="clearSort"
        id="clearSort"
        type="button"
        style={{ marginTop: "10px" }}
        value=""
        onClick={handleSetLastUpdatedSortOrderChange}
      >
        Clear Sorting Criteria
      </Button>
    </FilterDiv>
  );
};

export default ProjectFilter;