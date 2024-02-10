import styled from "styled-components";
import { rem } from 'polished'

export const SearchBox = styled.div`
  display: inline-block;
  position: relative;
  margin-right: 1rem;
`;

export const Search = styled.input`
  max-width: ${rem("192px")};
  border: 1px solid #cfd4db;
  border-radius: 2rem;
  font-size: 1.1rem;
  line-height: 2rem;
  padding: 0 0.5rem 0 2rem;
  transition: all 0.2s ease;
  background-size: 1rem;
  ::placeholder {
    color:#d6d4d5;
  }
`;
