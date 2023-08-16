import styled from 'styled-components';

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1fc468f4 (feat: creating logic to change the button color when active)
interface ButtonRolesProps {
  isActive: boolean; // Declare a prop for isActive
}

export const ButtonRoles = styled.div<ButtonRolesProps>`
<<<<<<< HEAD
=======
export const ButtonRoles = styled.div`
>>>>>>> d03a4c35 (fix: cleaning the code)
=======
>>>>>>> 1fc468f4 (feat: creating logic to change the button color when active)
  border-radius: 24px;
  padding: 10px 8px;
  font-size: 14px;
  font-family: 'Nunito Sans', sans-serif;
<<<<<<< HEAD
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
=======
  border: 1px solid ${({ isActive }) => (isActive ? '#ff7f0e' : 'black')};
  background-color: ${({ isActive }) => (isActive ? '#ff7f0e' : 'transparent')};
  cursor: pointer;
  &:hover {
    background-color: #ff7f0e;
    border: 1px solid #ff7f0e;
    transition: 0.1s;
>>>>>>> 1fc468f4 (feat: creating logic to change the button color when active)
  }
`;

export const TextRole = styled.div`
  font-size: 20px;
  font-family: 'Abel', sans-serif;
`;
