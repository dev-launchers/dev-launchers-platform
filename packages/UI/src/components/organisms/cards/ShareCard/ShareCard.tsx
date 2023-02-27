import SocialIconButton from '../../../molecules/SocialIconButton';
import React from 'react';
import { atoms } from '@devlaunchers/components/src/components';
import Close from '../../../../assets/icons/Close';
import Link from '../../../../assets/icons/Link';
import Button from '../../../atoms/Button';
import type { ShareCardProps } from '.';
import { useState } from 'react';
import { margin } from 'polished';

const ShareCard = ({ title, platforms, link }: ShareCardProps) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  const ALL_SOCIAL_PLATFORMS = [
    'twitter',
    'facebook',
    'instagram',
    'linkedin',
    'slack',
    'github',
    'discord',
  ] as const;

  type SocialPlatformsTuple = typeof ALL_SOCIAL_PLATFORMS;
  type SocialPlatform = SocialPlatformsTuple[number];

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
          css={{
            position: 'relative',
            width: '30px',
            height: '30px',
          }}
        >
          <Close
            width="20px"
            height="20px"
            css={{
              top: '50%',
              left: '50%',
              position: 'absolute',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </Button>
      </atoms.Box>
      <atoms.Box flexDirection="column" alignItems="center">
        <atoms.Typography type="h5" css={{ padding: '0px 0px 22px 0px' }}>
          Share This {title}
        </atoms.Typography>
        <atoms.Box flexDirection="row">
          {ALL_SOCIAL_PLATFORMS.map((SocialPlatform, index) => (
            <SocialIconButton key={index} type={SocialPlatform} />
          ))}
        </atoms.Box>
      </atoms.Box>
      <atoms.Box flexDirection="column" alignItems="left">
        <atoms.Typography type="label">Share With A Link</atoms.Typography>
        <Link width="22px" height="16px" />
      </atoms.Box>
    </atoms.Layer>
  );
};

export default ShareCard;
