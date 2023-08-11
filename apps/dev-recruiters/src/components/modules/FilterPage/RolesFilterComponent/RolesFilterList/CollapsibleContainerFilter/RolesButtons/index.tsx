import { ButtonRoles, TextRole } from './styles';

<<<<<<< HEAD
function RolesButtons({ textRole, onClick, isActive }) {
  return (
    <>
      <ButtonRoles isActive={isActive} onClick={onClick}>
=======
function RolesButtons({ textRole, onClick }) {
  return (
    <>
      <ButtonRoles onClick={onClick}>
>>>>>>> d03a4c35 (fix: cleaning the code)
        <TextRole>{textRole}</TextRole>
      </ButtonRoles>
    </>
  );
}

export default RolesButtons;
