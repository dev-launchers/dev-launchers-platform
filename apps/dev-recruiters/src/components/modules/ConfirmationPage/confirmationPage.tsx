import React from "react";
import {
  Header,
  MessageWrapper,
  Wrapper,
  Message,
  Button,
} from "./styledConfirmationPage";

import Link from "next/link";
import { useTheme } from "styled-components";
export default function ConfirmationPage() {
  
  return (
    <Wrapper theme={useTheme()}>
      <Header>Apply with Dev Launchers!</Header>
      <MessageWrapper>
        <Message>Thank you for applying to Dev Launchers!</Message>

        <Message>
          Your application has been sent to the product owner and is now in
          review. After the product owner reviews your application they will
          reach out through the email address you have provided.
        </Message>
        <Link href="/join" passHref>
          <Button as="a">Return to Recruiting Main Page</Button>
        </Link>
      </MessageWrapper>
    </Wrapper>
  );
}
