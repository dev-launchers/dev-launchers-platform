import React from "react";
import { Logout } from "../AccountDropdown/Logout";
import { env } from "../../../../utils/EnvironmentVariables";
import { DropdownItem } from "../AccountDropdown/StyledAccountDropdown";
import { DropdownButton } from "../AccountDropdown/StyledAccountDropdown";

export default function AccountDropdown(props) {
  return (
    <DropdownButton
      toggleBtnText="Menu"
      dropdownItems={
        <>
          {props.userData.id ? (
            <>
              {" "}
              <DropdownItem>
                <a href="/user-profile">Visit Account Page</a>
              </DropdownItem>
              <DropdownItem onClick={Logout}>Logout </DropdownItem>
            </>
          ) : (
            <DropdownItem fontSize="1.2rem" href={env().GOOGLE_AUTH_URL}>
              Sign In/Sign Up{" "}
            </DropdownItem>
          )}
        </>
      }
    ></DropdownButton>
  );
}
