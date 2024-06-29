import React from 'react';
import {
  Box,
  Layer,
  Typography,
} from '@devlaunchers/components/src/components/atoms';
import Discord from '../../../../assets/icons/Discord';
import Mail from '../../../../assets/icons/Mail';
import { useUserDataContext } from '../../../../context/UserDataContext';
import type { UserCardProps } from '.';

export default function UserCard({
  user,
  isVertical,
  style = {},
}: UserCardProps) {
  let userInfo = user;
  if (!user) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    userInfo = useUserDataContext().userData;
  }
  return (
    <Layer
      type="light"
      css={{ ...style, ...{ borderRadius: '16px', maxWidth: '360px' } }}
    >
      <Box
        padding="24px"
        flexDirection="column"
        justifyContent="center"
        alignItems={isVertical ? 'center' : undefined}
      >
        {isVertical ? (
          <Box
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

            <Typography type="h3" css={{ marginTop: '1rem' }}>
              {userInfo.name}
            </Typography>
            <Typography type="subtitle" css={{ marginTop: '.5rem' }}>
              {userInfo.bio}
            </Typography>
          </Box>
        ) : (
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box flexDirection="column" alignItems="center">
              <Typography type="h3">{userInfo.name}</Typography>
              <Typography type="subtitle" css={{ marginTop: '.5rem' }}>
                {userInfo.bio}
              </Typography>
            </Box>
            <img
              width="108"
              height="108"
              src={userInfo.profilePictureUrl}
              alt="Profile avatar"
              css={{ borderRadius: '50%' }}
            />
          </Box>
        )}
        <Box flexDirection="column" alignItems="flex-start">
          {userInfo.discord ? (
            <Box
              flexDirection="row"
              alignItems="center"
              margin={isVertical ? ' 1rem 0 1rem 1rem' : ' 0 0 1rem 0'}
              gap="1rem"
            >
              <Discord width={'22px'} height={'16px'} />
              <Box flexDirection="column">
                <Typography type="label">DISCORD</Typography>
                <Typography type="pSmall" css={{ marginTop: '.5rem' }}>
                  {userInfo?.discord?.username}#
                  {userInfo?.discord?.discriminator}
                </Typography>
              </Box>
            </Box>
          ) : (
            ``
          )}
          {userInfo.email ? (
            <Box
              flexDirection="row"
              alignItems="center"
              margin={isVertical ? ' 0 0 0 1rem' : undefined}
              gap="1rem"
            >
              <Mail width={'22px'} height={'16px'} />
              <Box flexDirection="column">
                <Typography type="label">Email</Typography>
                <Typography type="pSmall" css={{ marginTop: '.5rem' }}>
                  {userInfo.email}
                </Typography>
              </Box>
            </Box>
          ) : (
            ``
          )}
        </Box>
      </Box>
    </Layer>
  );
}
