import React from "react";
import Dropdown from "../../Dropdown";
import axios from "axios";
import { useRouter } from "next/router";
import { SignInArea, UserProfilePic } from "../StyledHeader";
import DropdownOptions from "./StyledAccountDropdown";
import Button from "../../../common/Button";
import { env } from "../../../../utils/EnvironmentVariables";

export default function AccountDropdown(props) {
  const router = useRouter();
  const logout = () => {
    axios.get(`${env().API_URL}/auth/logout`).then(response => {
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
              <a href="/user-profile">Visit Account Page</a>
              <button onClick={logout}>Logout </button>
            </>
          ) : (
            <Button fontSize="1.2rem" href={env().GOOGLE_AUTH_URL}>
              Sign In/Sign Up{" "}
            </Button>
          )}
        </>
      }
    ></Dropdown>
  );
}
