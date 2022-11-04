import React from "react";
import Link from "next/link";
import Logout from "../../../../utils/Logout";
import { env } from "../../../../utils/EnvironmentVariables";
import {
  AccountMenuDropdownItem,
  AccountMenuDropdownButton,
  MenuButton,
} from "./StyledAccountDropdown";
import SignInButton from "../../SignInButton/SignInButton";

export default function AccountDropdown(props) {
  return (
    <div>
      {props.userData?.id ? (
        <AccountMenuDropdownButton
          toggleBtnText="Menu"
          dropdownItems={
            <>
              {" "}
              <AccountMenuDropdownItem>
                <Link href="/users/me" passHref>
                  <a>Visit Account Page</a>
                </Link>
              </AccountMenuDropdownItem>
              <AccountMenuDropdownItem onClick={Logout}>
                Logout{" "}
              </AccountMenuDropdownItem>
            </>
          }
        ></AccountMenuDropdownButton>
      ) : (
        <SignInButton />
      )}
    </div>
  );
}
