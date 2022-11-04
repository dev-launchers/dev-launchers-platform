import Link from 'next/link';
import { env } from '../../../../utils/EnvironmentVariables';
import Logout from '../../../../utils/Logout';
import {
  AccountMenuDropdownItem,
  AccountMenuDropdownButton,
  MenuButton,
} from './StyledAccountDropdown';

export default function AccountDropdown(props) {
  return (
    <div>
      {props.userData?.id ? (
        <AccountMenuDropdownButton
          toggleBtnText="Menu"
          dropdownItems={
            <>
              {' '}
              <AccountMenuDropdownItem>
                <Link href="/user-profile" passHref>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a>Visit Account Page</a>
                </Link>
              </AccountMenuDropdownItem>
              <AccountMenuDropdownItem onClick={Logout}>
                Logout{' '}
              </AccountMenuDropdownItem>
            </>
          }
        ></AccountMenuDropdownButton>
      ) : (
        <MenuButton fontSize="1.2rem" href={env().GOOGLE_AUTH_URL}>
          Sign In{' '}
        </MenuButton>
      )}
    </div>
  );
}
