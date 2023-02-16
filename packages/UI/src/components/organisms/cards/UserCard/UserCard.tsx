import React from 'react';
import { atoms } from '@devlaunchers/components/src/components';
import Discord from '../../../../assets/icons/Discord';
import Mail from '../../../../assets/icons/Mail';
import { useUserDataContext } from '../../../../context/UserDataContext';
import type { UserCardProps } from '.';

export default function UserCard({ user, isVertical }: UserCardProps) {
  let userInfo = user;
  if (!user) {
    userInfo = useUserDataContext().userData;
  }

  // const { userData } = useUserDataContext();
  return (
    <atoms.Layer type="light" css={{ borderRadius: '16px', maxWidth: '360px' }}>
      <atoms.Box
        padding="24px"
        flexDirection="column"
        justifyContent="center"
        alignItems={isVertical ? 'center' : undefined}
      >
        {isVertical ? (
          <atoms.Box
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <img
              width="108"
              height="108"
              src={userInfo.profilePictureUrl}
              alt="Profile avatar"
              css={{ borderRadius: '50%' }}
            />

            <atoms.Typography type="h3" style={{ marginTop: '1rem' }}>
              {userInfo.name}
            </atoms.Typography>
            <atoms.Typography type="h5" style={{ marginTop: '.5rem' }}>
              {userInfo.bio}
            </atoms.Typography>
          </atoms.Box>
        ) : (
          <atoms.Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <atoms.Box flexDirection="column" alignItems="center">
              <atoms.Typography type="h3">{userInfo.name}</atoms.Typography>
              <atoms.Typography type="h5" css={{ marginTop: '.5rem' }}>
                {userInfo.bio}
              </atoms.Typography>
            </atoms.Box>
            <img
              width="108"
              height="108"
              src={userInfo.profilePictureUrl}
              alt="Profile avatar"
              css={{ borderRadius: '50%' }}
            />
          </atoms.Box>
        )}
        <atoms.Box flexDirection="column" alignItems="flex-start">
          <atoms.Box
            flexDirection="row"
            alignItems="center"
            margin={isVertical ? ' 1rem 0 1rem 1rem' : ' 0 0 1rem 0'}
            gap="1rem"
          >
            <Discord width={'22px'} height={'16px'} />
            <atoms.Box flexDirection="column">
              <atoms.Typography type="label">DISCORD</atoms.Typography>
              <atoms.Typography type="pSmall" css={{ marginTop: '.5rem' }}>
                {userInfo.discord.username}
              </atoms.Typography>
            </atoms.Box>
          </atoms.Box>
          <atoms.Box
            flexDirection="row"
            alignItems="center"
            margin={isVertical ? ' 0 0 0 1rem' : undefined}
            gap="1rem"
          >
            <Mail width={'22px'} height={'16px'} />
            <atoms.Box flexDirection="column">
              <atoms.Typography type="label">Email</atoms.Typography>
              <atoms.Typography type="pSmall" css={{ marginTop: '.5rem' }}>
                {userInfo.email}
              </atoms.Typography>
            </atoms.Box>
          </atoms.Box>
        </atoms.Box>
      </atoms.Box>
    </atoms.Layer>
  );
}
