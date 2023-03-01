import SocialIconButton from '../../../molecules/SocialIconButton';
import React from 'react';
import { atoms } from '@devlaunchers/components/src/components';
import Close from '../../../../assets/icons/Close';
import Link from '../../../../assets/icons/Link';
import Button from '../../../atoms/Button';
import type { ShareCardProps } from '.';
import { useState } from 'react';
import FormField from '../../../organisms/FormField';

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

  return (
    <atoms.Layer
      type="light"
      css={{
        borderRadius: '10px',
        maxWidth: '480px',
        maxHeight: '300px',
        padding: '12px',
        display: 'inline-block',
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
      </atoms.Box>
      <atoms.Box
        flexDirection="column"
        justifyContent="stretch"
        css={{ display: 'inline-flex' }}
      >
        <atoms.Box
          flexDirection="row"
          css={{
            display: 'flex',
            columnGap: '5px',
            padding: '0px 0px 22px 0px',
          }}
        >
          {ALL_SOCIAL_PLATFORMS.map((SocialPlatform, index) => (
            <SocialIconButton key={index} type={SocialPlatform} />
          ))}
        </atoms.Box>
        <atoms.Box flexDirection="row">
          <FormField
            label={'Share With A Link'}
            id={''}
            placeholder={''}
            disabled={true}
            onChange={function (value: ChangeEvent<HTMLInputElement>): void {
              throw new Error('Function not implemented.');
            }}
          />
          <Link />
        </atoms.Box>
      </atoms.Box>
    </atoms.Layer>
  );
};

export default ShareCard;
