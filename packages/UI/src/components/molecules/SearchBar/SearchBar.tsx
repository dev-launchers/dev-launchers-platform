import type { ChangeEvent, FC } from 'react';
import { useState } from 'react';
import Search from '../../../assets/icons/Search';
import { StyledInput, Input } from './StyledSearchBar';
import type { SearchBarProps } from '.';

const SearchBar: FC<SearchBarProps> = ({
  placeholder,
  onChange,
  width,
  mode,
  hasButton,
}) => {
  const [text, setText] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    onChange?.(e);
  };

  return (
    <StyledInput mode={mode} hasButton={hasButton}>
      <Input
        hasButton={hasButton}
        mode={mode}
        role="search"
        width={width}
        type="text"
        value={text}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <div className="left-icon">
        <Search />
      </div>
    </StyledInput>
  );
};
export default SearchBar;
