import React from 'react';
import { atoms } from '@devlaunchers/components/src/components';
import Discord from '../../../../assets/icons/Discord';
import Mail from '../../../../assets/icons/Mail';
import Close from '../../../../assets/icons/Close';
import Link from '../../../../assets/icons/Link';
import type { ShareCardProps } from '.';

const ShareCard = ({ title, platforms, link }: ShareCardProps) => {
  return (
    <atoms.Layer
      type="light"
      css={{
        borderRadius: '10px',
        maxWidth: '480px',
        maxHeight: '300px',
        padding: '12px',
      }}
    >
      <atoms.Box flexDirection="column" alignItems="end">
        <Close width="22px" height="16px" />
      </atoms.Box>
      <atoms.Box flexDirection="column" alignItems="center">
        <atoms.Typography type="h5">Test</atoms.Typography>
        <Discord width="22px" height="16px" />
      </atoms.Box>
      <atoms.Box flexDirection="column" alignItems="center">
        <atoms.Typography type="label">Test</atoms.Typography>
        <Link width="22px" height="16px" />
      </atoms.Box>
    </atoms.Layer>
  );
};

export default ShareCard;
