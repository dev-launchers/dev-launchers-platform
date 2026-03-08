import React from 'react';
import { atoms } from '@devlaunchers/components/src/components';
import { Button } from '@devlaunchers/components/src/components/atoms';
import { useRouter } from 'next/router';

export function ThankyouPage() {
  const router = useRouter();
  const routeChange = (e) => {
    e.preventDefault();
    router.push('/join');
  };
  return (
    <div
      style={{
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        padding: '6rem 8rem',
        textAlign: 'center',
      }}
    >
      <atoms.Typography
        as="h1"
        size="xl6"
        variant="primary"
        textWeight="bold"
        textAlign="center"
        className="text-white"
      >
        Thank you!
      </atoms.Typography>

      <atoms.Typography
        as="p"
        size="body_xl"
        variant="secondary"
        textAlign="center"
        className="text-white"
      >
        Your application for the Dev Launchers Talent Community has been
        received. We will email you when a volunteer role that matches your
        skillsets and/or interests opens up!
      </atoms.Typography>

      <div style={{ marginTop: '2rem' }}>
        <Button color="nebula" size="medium" onClick={routeChange}>
          VIEW CURRENT OPEN ROLES
        </Button>
      </div>
    </div>
  );
}
