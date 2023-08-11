import styled from 'styled-components';

<<<<<<< HEAD
interface ButtonRolesProps {
  isActive: boolean; // Declare a prop for isActive
}

export const ButtonRoles = styled.div<ButtonRolesProps>`
=======
export const ButtonRoles = styled.div`
>>>>>>> d03a4c35 (fix: cleaning the code)
  border-radius: 24px;
  padding: 10px 8px;
  font-size: 14px;
  font-family: 'Nunito Sans', sans-serif;
<<<<<<< HEAD
  border: 1px solid ${({ isActive }) => (isActive ? '#ff7f0e' : 'black')};
  background-color: ${({ isActive }) => (isActive ? '#ff7f0e' : 'transparent')};
  cursor: pointer;
  &:hover {
    background-color: #ff7f0e;
    border: 1px solid #ff7f0e;
    transition: 0.1s;
=======
  border: 1px solid black;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: #ff7f0e;
    border: none;
>>>>>>> d03a4c35 (fix: cleaning the code)
  }
`;

export const TextRole = styled.div`
  font-size: 20px;
  font-family: 'Abel', sans-serif;
`;
