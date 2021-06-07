import React from "react";
import Dropdown from "../../Dropdown";
import axios from "axios";
import { useRouter } from "next/router";
import DropdownButton from "../AccountDropdown/StyledAccountDropdown";
import { env } from "../../../../utils/EnvironmentVariables";
import Link from "next/link";

export default function AccountDropdown(props) {
  const router = useRouter();
  const logout = () => {
    axios
      .get(`${env().API_URL}/auth/logout`, { withCredentials: true })
      .then((response) => {
        console.log(response);
        router.replace("/");
      });
  };

  return (
    <Dropdown
      toggleBtnText="Menu"
      dropdownItems={
        <>
          {props.userData.id ? (
            <>
              {" "}
              <DropdownButton>
                <Link href="/user-profile" passHref>
                  <a>Visit Account Page</a>
                </Link>
              </DropdownButton>
              <DropdownButton onClick={logout}>Logout </DropdownButton>
            </>
          ) : (
            <DropdownButton fontSize="1.2rem" href={env().GOOGLE_AUTH_URL}>
              Sign In/Sign Up{" "}
            </DropdownButton>
          )}
        </>
      }
    ></Dropdown>
  );
}
