import React from 'react';
import { Icons } from '@devlaunchers/components/src/assets';
import {
  Header,
  MessageWrapper,
  Wrapper,
  LoginButton,
  CreateAccountButton,
  ButtonWrapper,
  Text,
  IconWrapper,
} from './styledLoginPage';
import { useRouter } from 'next/router';
import { Icon } from '@components/common/AppDropDown/StyledDropDown';
export default function LoginPage({ closeModal }) {
  const router = useRouter();
  return (
    <Wrapper>
      <MessageWrapper>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',

            marginBottom: 12,
          }}
        >
          <IconWrapper onClick={closeModal}>
            <Icons.Chevron height={14} width={8} />
          </IconWrapper>
        </div>
        <Header>Create An Account / Sign In</Header>
        <Text>
          Create or sign into your account to manage the roles you’re interested
          in!
        </Text>
        <ButtonWrapper>
          <LoginButton
            href={
              process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL +
              `?redirectURL=${process.env.NEXT_PUBLIC_FRONT_END_URL}/users/me`
            }
          >
            Sign in
          </LoginButton>
          <CreateAccountButton
            href={
              process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL +
              `?redirectURL=${process.env.NEXT_PUBLIC_FRONT_END_URL}/users/me`
            }
          >
            Create an account
          </CreateAccountButton>
        </ButtonWrapper>
      </MessageWrapper>
    </Wrapper>
  );
}
