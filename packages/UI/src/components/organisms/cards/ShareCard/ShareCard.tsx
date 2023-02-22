import React from 'react';
import { atoms } from '@devlaunchers/components/src/components';
import Discord from '../../../../assets/icons/Discord';
import Mail from '../../../../assets/icons/Mail';
import Close from '../../../../assets/icons/Close';
import Link from '../../../../assets/icons/Link';
import Button from '../../../atoms/Button';
import type { ShareCardProps } from '.';
import { useState } from 'react';

const ShareCard = ({ title, platforms, link }: ShareCardProps) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

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
        <Button
          onClick={handleClose}
          buttonSize="standard"
          buttonType="alternative"
        >
          <Close width="22px" height="16px" />
        </Button>
      </atoms.Box>
      <atoms.Box flexDirection="column" alignItems="center">
        <atoms.Typography type="h5">{title}</atoms.Typography>
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
