import styled from 'styled-components';

interface ButtonRolesProps {
  isActive: boolean; // Declare a prop for isActive
}

export const ButtonRoles = styled.div<ButtonRolesProps>`
  border-radius: 1.5rem;
  padding: 0.625rem 0.5rem;
  font-size: 0.875rem;
  font-family: 'Nunito Sans', sans-serif;
  border: 0.0625rem solid ${({ isActive }) => (isActive ? '#ff7f0e' : 'black')};
  background-color: ${({ isActive }) => (isActive ? '#ff7f0e' : 'transparent')};
  cursor: pointer;
  &:hover {
    background-color: #ff7f0e;
    border: 0.0625rem solid #ff7f0e;
    transition: 0.1s;
  }
`;

export const TextRole = styled.div`
  font-size: 1.25rem;
  font-family: 'Abel', sans-serif;
`;
