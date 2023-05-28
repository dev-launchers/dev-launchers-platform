import React from "react";
import {
  Header,
  MessageWrapper,
  Wrapper,
  Button,
  ButtonWrapper,
} from "./styledLoginPage";
import { useRouter } from "next/router";
export default function LoginPage() {
  const router = useRouter();
  return (
    <Wrapper>
      <MessageWrapper>
        <Header>Dev Launchers Volunteer Application</Header>
        <ButtonWrapper>
          <Button href={process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL + '?redirectURL='+ process.env.BASE_URL_WEBSITE +'/users/me'}>
            Create an account
          </Button>
          <Button href={process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL + '?redirectURL='+ process.env.BASE_URL_WEBSITE +'/users/me'}>
            Sign in
          </Button>
        </ButtonWrapper>
      </MessageWrapper>
    </Wrapper>
  );
}
