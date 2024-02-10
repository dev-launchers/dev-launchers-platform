import { Search, SearchBox } from "./StyledSearchBar";

function SearchBar({ onChange }) {
  return (
    <SearchBox>
      <Search
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search Projects"
      />
    </SearchBox>
  );
}

export default SearchBar;
