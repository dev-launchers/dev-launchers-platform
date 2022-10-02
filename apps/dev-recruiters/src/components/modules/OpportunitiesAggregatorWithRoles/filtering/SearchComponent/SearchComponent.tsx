import React, { KeyboardEvent, useState } from "react";
import { Container, Icon, SearchField } from "./StyledSearchComponent";
import _, { debounce } from "lodash";

interface Props {
  value: string;
  onChange: (value: any) => void;
}

export default function SearchComponent({ value, onChange }: Props) {
  const [searchTerm, setSearchTerm] = useState(value);

  const handleOnInputChange = (value: string) => {
    setSearchTerm(value);
    setTimeout(() => {
      onChange(searchTerm);
    }, 1000);
  };

  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onChange(searchTerm);
    }
  };
  return (
    <Container>
      <Icon
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </Icon>
      <SearchField
        onChange={({ target }) => handleOnInputChange(target.value)}
        placeholder="Search for a position or skill"
        type="text"
        onKeyDown={handleOnKeyDown}
      />
      {/* <SearchButton type='submit' value={'Search'} /> */}
    </Container>
  );
}
