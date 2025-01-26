import React from 'react';
import Button from '@devlaunchers/components/components/atoms/Button';

/**
 * SignIn Component
 * Displays a sign-in prompt and a button for users to authenticate via Google.
 *
 * @returns {JSX.Element} A styled sign-in prompt with a call-to-action button.
 */

const SignIn = () => {
  return (
    // Container div styled to center its content vertically and horizontally
    <div className="flex flex-col gap-6 justify-center items-center w-full min-h-[75.4vh]">
      {/* Message prompting the user to sign in */}
      <p style={{ fontSize: '2rem' }}>Please sign in to access this page!</p>
      {/* Button to trigger Google authentication */}
      <Button fontSize="2rem" href={process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL}>
        Sign In
      </Button>
      <br /> {/* Optional line break for spacing */}
    </div>
  );
};

export default SignIn;
