import React from "react";
import Button from '../../../../components/common/Button';

const SignIn = () => {
    return (
      <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '60vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p style={{ fontSize: '2rem' }}>
        Please sign in to access this page!
      </p>
      <Button fontSize="2rem" href={process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL}>
        Sign In
      </Button>
      <br />
    </div>);
}

export default SignIn;