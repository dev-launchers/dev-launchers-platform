import styled from 'styled-components';
import DropdownButton from './Dropdown';
import Button from './Button';

export const AccountMenuDropdownButton = styled(DropdownButton)`
  @media (orientation: portrait) {
    display: none;
  }
`;

export const MenuButton = styled(Button)`
  @media (orientation: portrait) {
    display: none;
  }
`;

export const AccountMenuDropdownItem = styled.a`
  font-family: ${({ theme }) => theme.fonts.headline}, sans-serif;
  background-color: #1c1c1c;

  width: ${({ width }) => width || ''};
  border: 0px;

  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize || '1.1rem'};
  margin-top: ${({ marginTop }) => marginTop || ''};
  padding: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-weight: bolder;
`;
