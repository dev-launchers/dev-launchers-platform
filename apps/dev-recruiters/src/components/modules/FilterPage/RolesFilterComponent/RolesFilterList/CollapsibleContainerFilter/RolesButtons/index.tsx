import { ButtonRoles, TextRole } from './styles';

<<<<<<< HEAD
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
=======
function RolesButtons({ textRole, onClick, isActive }) {
  return (
    <>
      <ButtonRoles isActive={isActive} onClick={onClick}>
>>>>>>> 1fc468f4 (feat: creating logic to change the button color when active)
        <TextRole>{textRole}</TextRole>
      </ButtonRoles>
    </>
  );
}

export default RolesButtons;
