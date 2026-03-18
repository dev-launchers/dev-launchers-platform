import React from 'react';
import Link from 'next/link';
import { Button, Box } from '@devlaunchers/components/src/components/atoms';
import { SignInWrapper } from './StyledSignInSection';

const SignInSection = ({ label, redirectURL, headerTitle }) => {
  return (
    <SignInWrapper>
      <Box flexDirection="column">
        <span className="text-2xl mb-2">{headerTitle}</span>
        <span className="text-sm md:text-lg mb-4">{label}</span>
      </Box>
      <Link
        href={
          process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL +
          '?redirectURL=' +
          redirectURL
        }
      >
        <Button size="small" type="primary" color="nebula" mode="light">
          Sign in
        </Button>
      </Link>
    </SignInWrapper>
  );
};

export default SignInSection;
