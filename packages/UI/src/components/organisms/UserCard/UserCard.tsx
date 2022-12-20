import React from 'react';
import { atoms } from '@devlaunchers/components/src/components';
import Discord from '../../../assets/icons/Discord';
import Mail from '../../../assets/icons/Mail';
import logo from '../../../assets/images/logo-monogram.png';

export default function UserCard() {
  return (
    <atoms.Layer
      type="white"
      style={{ borderRadius: '16px', maxWidth: '327px' }}
    >
      <atoms.Box
        padding={'16px 8px'}
        flexDirection={'row'}
        justifyContent={'center'}
      >
        <atoms.Box flexDirection="column" gap={'10px'}>
          <atoms.Typography type="h3">John James</atoms.Typography>
          <atoms.Typography type="h5"> Product Lead</atoms.Typography>
          <atoms.Box flexDirection="row" gap={'6px'} alignItems="center">
            <Discord />
            <atoms.Box flexDirection="column">
              <atoms.Typography type="p">John James</atoms.Typography>
              <atoms.Typography type="p">@discord_handle </atoms.Typography>
            </atoms.Box>
          </atoms.Box>
          <atoms.Box flexDirection="row" gap={'6px'} alignItems="center">
            <Mail />
            <atoms.Box flexDirection="column">
              <atoms.Typography type="p">Email</atoms.Typography>
              <atoms.Typography type="p">johnjames@email.com </atoms.Typography>
            </atoms.Box>
          </atoms.Box>
        </atoms.Box>
        <img
          width="108"
          height="108"
          src={logo}
          alt="Profile avatar"
          style={{ borderRadius: '50%' }}
        />
      </atoms.Box>
    </atoms.Layer>
  );
}
