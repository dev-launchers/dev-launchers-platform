import React from "react";
import Link from "next/link";
import Logout from "../../../../utils/Logout";
import { env } from "../../../../utils/EnvironmentVariables";
import {
  AccountMenuDropdownItem,
  AccountMenuDropdownButton,
  MenuButton,
} from "./StyledAccountDropdown";

export default function AccountDropdown(props) {
  return (
    <div>
      {props.userData.id && props.userData.username ? (
        <AccountMenuDropdownButton
          toggleBtnText="Menu"
          dropdownItems={
            <>
              <AccountMenuDropdownItem>
                <Link href="/users/me" passHref>
                  <a>Visit Account Page</a>
                </Link>
              </AccountMenuDropdownItem>
              <AccountMenuDropdownItem onClick={Logout}>
                Logout
              </AccountMenuDropdownItem>
            </>
          }
        ></AccountMenuDropdownButton>
      ) : (
        <MenuButton fontSize="1.2rem" href={env().GOOGLE_AUTH_URL}>
          Sign In
        </MenuButton>
      )}
    </div>
  );
}
