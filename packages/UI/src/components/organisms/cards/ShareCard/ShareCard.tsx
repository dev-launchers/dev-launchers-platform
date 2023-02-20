import React from 'react';
import { atoms } from '@devlaunchers/components/src/components';
import Discord from '../../../../assets/icons/Discord';
import Mail from '../../../../assets/icons/Mail';
import Close from '../../../../assets/icons/Close';
import type { ShareCardProps } from '.';

const ShareCard = ({ title, platforms, link }: ShareCardProps) => {
  return (
    <atoms.Layer type="light">
      <atoms.Box padding="40px" flexDirection="row">
        <atoms.Box flexDirection="column"></atoms.Box>
        <atoms.Box flexDirection="column">
          <atoms.Typography type="h5">Test</atoms.Typography>
          <Discord width="22px" height="16px" />
          <atoms.Typography type="label">Test</atoms.Typography>
        </atoms.Box>
        <atoms.Box flexDirection="column"></atoms.Box>
        <Close width="22px" height="16px" />
      </atoms.Box>
    </atoms.Layer>
  );
};

export default ShareCard;
