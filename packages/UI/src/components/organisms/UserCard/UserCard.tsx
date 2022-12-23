import React from 'react';
import { atoms } from '@devlaunchers/components/src/components';
import Discord from '../../../assets/icons/Discord';
import Mail from '../../../assets/icons/Mail';
import { useUserDataContext } from './../../../context/UserDataContext';
import type { UserCardProps } from '.';

export default function UserCard({ user, isVertical }: UserCardProps) {
  let userInfo = user;
  if (!user) {
    userInfo = useUserDataContext().userData;
  }

  // const { userData } = useUserDataContext();
  return (
    <>
      {isVertical ? (
        <atoms.Layer
          type="white"
          style={{ borderRadius: '16px', maxWidth: '327px' }}
        >
          <atoms.Box
            padding={'16px 8px'}
            flexDirection={'row'}
            justifyContent={'center'}
          >
            <atoms.Box flexDirection="column" margin={'20px 10px 0 0'}>
              <atoms.Typography type="h3">{userInfo.name}</atoms.Typography>
              <atoms.Typography type="h5">Product Lead</atoms.Typography>
              <atoms.Box
                flexDirection="row"
                alignItems="center"
                margin={' 32px 0 10px 0'}
              >
                <Discord />
                <atoms.Box flexDirection="column" margin={'0 0 0 10px'}>
                  <atoms.Typography type="label">DISCORD</atoms.Typography>
                  <atoms.Typography type="pSmall">
                    {userInfo.discord.username}
                  </atoms.Typography>
                </atoms.Box>
              </atoms.Box>
              <atoms.Box flexDirection="row" alignItems="center">
                <Mail />
                <atoms.Box flexDirection="column" margin={'0 0 0 10px'}>
                  <atoms.Typography type="label">Email</atoms.Typography>
                  <atoms.Typography type="pSmall">
                    {userInfo.email}
                  </atoms.Typography>
                </atoms.Box>
              </atoms.Box>
            </atoms.Box>
            <img
              width="108"
              height="108"
              src={userInfo.profilePictureUrl}
              alt="Profile avatar"
              style={{ borderRadius: '50%' }}
            />
          </atoms.Box>
        </atoms.Layer>
      ) : (
        <>
          <atoms.Layer
            type="white"
            style={{ borderRadius: '16px', maxWidth: '368px' }}
          >
            <atoms.Box
              padding={'16px 8px'}
              flexDirection={'row'}
              justifyContent={'center'}
            >
              <atoms.Box
                flexDirection={'column'}
                justifyContent={'center'}
                margin={'0 10px 0 0'}
              >
                <img
                  width="108"
                  height="108"
                  src={userInfo.profilePictureUrl}
                  alt="Profile avatar"
                  style={{ borderRadius: '50%' }}
                />
              </atoms.Box>
              <atoms.Box flexDirection="column" margin={'20px 10px 0 0'}>
                <atoms.Typography type="h3">{userInfo.name}</atoms.Typography>
                <atoms.Typography type="h5">Product Lead</atoms.Typography>
                <atoms.Box
                  flexDirection="row"
                  alignItems="center"
                  margin={' 32px 0 10px 0'}
                >
                  <Discord />
                  <atoms.Box flexDirection="column" margin={'0 0 0 10px'}>
                    <atoms.Typography type="label">DISCORD</atoms.Typography>
                    <atoms.Typography type="pSmall">
                      {userInfo.discord.username}
                    </atoms.Typography>
                  </atoms.Box>
                </atoms.Box>
                <atoms.Box flexDirection="row" alignItems="center">
                  <Mail />
                  <atoms.Box flexDirection="column" margin={'0 0 0 10px'}>
                    <atoms.Typography type="label">Email</atoms.Typography>
                    <atoms.Typography type="pSmall">
                      {userInfo.email}
                    </atoms.Typography>
                  </atoms.Box>
                </atoms.Box>
              </atoms.Box>
            </atoms.Box>
          </atoms.Layer>
        </>
      )}
    </>
  );
}
