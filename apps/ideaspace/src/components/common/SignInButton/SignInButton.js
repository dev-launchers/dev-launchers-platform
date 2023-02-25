import React from "react";
import {
  MenuButton
} from "./StyledSignInButton";

export default function SignInButton({redirectUrl="https://devlaunchers.org/users/me"}) {
  return (
    <MenuButton fontSize="1.2rem" href={process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL+"?redirectURL="+redirectUrl}>
        Sign In{" "}
    </MenuButton>
  );
}
