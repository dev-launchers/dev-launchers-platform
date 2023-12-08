import React from "react";
import {
  MenuButton
} from "./StyledSignInButton";

export default function SignInButton({redirectUrl=(process.env.NEXT_PUBLIC_FRONT_END_URL + "/users/me")}) {
  return (
    <MenuButton fontSize="1.2rem" href={process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL+"?redirectURL="+redirectUrl}>
        Sign In{" "}
    </MenuButton>
  );
}
