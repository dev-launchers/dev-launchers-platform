import styled from 'styled-components';

export const List = styled.ul`
  box-sizing: border-box;
  padding: 0;
  display: block;
  margin: 0;
  width: auto;
  list-style-type: none;
`;

export const ListItem = styled.li<{ checked: boolean }>`
  padding: 0.2rem 0.5rem;
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.checked ? 'rgba(196, 196, 196, 0.2)' : 'inherit'};
  border-radius: 3.03694px;
`;
