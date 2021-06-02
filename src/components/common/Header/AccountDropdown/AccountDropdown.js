import React from "react";
import Dropdown from "../../Dropdown";
import axios from "axios";

import DropdownOptions from "./StyledAccountDropdown";

export default function AccountDropdown() {
  let componentDidMount = () => {
    //transferred here from Header.js

    //       /*option 2 */ axios
    //         .get(
    //           `https://api.devlaunchers.com/auth/logout`
    //       .then(response => {
    //         console.log(response);
    //           )}
    //     </Button>
    // </SignInArea>

    // React.useEffect(componentDidMount);

    return (
      <Dropdown
        toggleBtnText={"Menu"}
        dropdownItems={
          <SignInArea>
            {userData.profilePictureUrl ? (
              <button>
                <UserProfilePic src={userData.profilePictureUrl} />
              </button>
            ) : (
              <Button fontSize="1.2rem" href={env().GOOGLE_AUTH_URL}></Button>
            )}
          </SignInArea>
        }
      />
    );
  };
}
