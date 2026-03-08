import React from 'react';
import Link from 'next/link';
import { atoms } from '@devlaunchers/components/src/components';
import { SignInWrapper } from './StyledSignInSection';

const SignInSection = ({ label, redirectURL }) => {
  return (
    <SignInWrapper>
      <atoms.Box flexDirection="column">{label}</atoms.Box>
      <br />
      <Link
        href={
          process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL +
          '?redirectURL=' +
          redirectURL
        }
      >
        <atoms.Button size="small" type="primary" color="nebula" mode="light">
          Sign&nbsp;in
        </atoms.Button>
      </Link>
    </SignInWrapper>
  );
};

export default SignInSection;
