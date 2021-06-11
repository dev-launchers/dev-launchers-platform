import React from "react";
import { Logout } from "../AccountDropdown/Logout";
import { env } from "../../../../utils/EnvironmentVariables";
import { AccountMenuDropdownItem } from "../AccountDropdown/StyledAccountDropdown";
import { AccountMenuDropdownButton } from "../AccountDropdown/StyledAccountDropdown";
import Link from "next/link";

export default function AccountDropdown(props) {
  return (
    <AccountMenuDropdownButton
      toggleBtnText="Menu"
      dropdownItems={
        <>
          {props.userData.id ? (
            <>
              {" "}
              <AccountMenuDropdownItem>
                <Link href="/user-profile" passHref>
                  <a>Visit Account Page</a>
                </Link>
              </AccountMenuDropdownItem>
              <AccountMenuDropdownItem onClick={Logout}>
                Logout{" "}
              </AccountMenuDropdownItem>
            </>
          ) : (
            <AccountMenuDropdownItem
              fontSize="1.2rem"
              href={env().GOOGLE_AUTH_URL}
            >
              Sign In/Sign Up{" "}
            </AccountMenuDropdownItem>
          )}
        </>
      }
    ></AccountMenuDropdownButton>
  );
}
