import { ButtonRoles, TextRole } from './styles';

function RolesButtons({ textRole, onClick, isActive }) {
  return (
    <>
      <ButtonRoles isActive={isActive} onClick={onClick}>
        <TextRole>{textRole}</TextRole>
      </ButtonRoles>
    </>
  );
}

export default RolesButtons;
