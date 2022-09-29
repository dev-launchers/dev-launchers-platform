/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { env } from '../../../utils/EnvironmentVariables';
import Logout from '../../../utils/Logout';
import {
  AccountMenuDropdownButton,
  AccountMenuDropdownItem,
  // eslint-disable-next-line prettier/prettier
  MenuButton
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
        <MenuButton fontSize="1.2rem" href={env().GOOGLE_AUTH_URL+"?redirectURL=https://devlaunchers.org/users/me"}>
          Sign In{' '}
        </MenuButton>
      )}
    </div>
  );
}
