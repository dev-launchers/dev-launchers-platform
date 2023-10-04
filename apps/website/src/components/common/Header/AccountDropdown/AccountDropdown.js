import React from "react";
import Link from "next/link";
import Logout from "../../../../utils/Logout";
import {
  AccountMenuDropdownItem,
  AccountMenuDropdownButton,
  MenuButton,
} from "./StyledAccountDropdown";
import { useUserDataContext } from "@devlaunchers/components/context/UserDataContext";

export default function AccountDropdown(props) {
  const { setUserData } = useUserDataContext();

  const handleLogout = () => {
    Logout();
    setUserData({
      id: 0,
      name: '',
      username: '',
      email: '',
      bio: '',
      profilePictureUrl: '',
      socialMediaLinks: [],
      totalPoints: 0,
      totalSeasonPoints: 0,
      availablePoints: 0,
      volunteerHours: 0,
      discord: {
        id: 0,
        avatar: '',
        username: '',
        discriminator: '',
      },
      interests: [],
    })
  };

  return (
    <div>
      {props?.userData?.id && props?.userData?.username ? (
        <AccountMenuDropdownButton
          toggleBtnText="Menu"
          dropdownItems={
            <>
              <AccountMenuDropdownItem>
                <Link href="/users/me" passHref>
                  <a>Visit Account Page</a>
                </Link>
              </AccountMenuDropdownItem>
              <AccountMenuDropdownItem onClick={handleLogout}>
                Logout
              </AccountMenuDropdownItem>
            </>
          }
        ></AccountMenuDropdownButton>
      ) : (
        <MenuButton fontSize="1.2rem" 
          href={process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL
            +`?redirectURL=${process.env.NEXT_PUBLIC_FRONT_END_URL}/users/me`}>
          Sign In
        </MenuButton>
      )}
    </div>
  );
}
