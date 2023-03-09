import SocialIconButton from '../../../molecules/SocialIconButton';
import React from 'react';
import { atoms } from '@devlaunchers/components/src/components';
import type { ShareCardProps } from '.';
import { useState } from 'react';
import Link from '../../../../assets/icons/Link';
import { ShareIdea, ShareLink } from './ShareUrl';
import {
  Container,
  ShareLinkButton,
  ShareInput,
  CloseButton,
  CloseIcon,
  ShareIdeaText,
  ShareLinkText,
  ShareLinkBox,
} from './StyledShareCard';

const ShareCard = ({ title, platforms, link }: ShareCardProps) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const currentLocation = window.location.href;

  const ALL_SOCIAL_PLATFORMS = [
    'twitter',
    'facebook',
    'mail',
    'linkedin',
  ] as const;

  return (
    <Container type="light">
      <atoms.Box flexDirection="column" alignItems="end">
        <CloseButton
          onClick={handleClose}
          buttonSize="standard"
          buttonType="alternative"
        >
          <CloseIcon width="20px" height="20px" />
        </CloseButton>
      </atoms.Box>
      <atoms.Box flexDirection="column" alignItems="center">
        <ShareIdeaText type="h5">Share This {title}</ShareIdeaText>
      </atoms.Box>
      <atoms.Box flexDirection="row" gap="5px" padding="0px 0px 22px 0px">
        {ALL_SOCIAL_PLATFORMS.map((SocialPlatform, index) => (
          <SocialIconButton
            onClick={() => ShareIdea(SocialPlatform, currentLocation)}
            key={index}
            type={SocialPlatform}
          />
        ))}
      </atoms.Box>
      <atoms.Box flexDirection="row" gap="15px">
        <ShareLinkText type="label">Share With A Link</ShareLinkText>
      </atoms.Box>
      <ShareLinkBox flexDirection="row">
        <ShareLinkButton onClick={() => ShareLink(currentLocation)}>
          <Link width="29px" height="24px" />
        </ShareLinkButton>
        <ShareInput type="text" value={currentLocation} />
      </ShareLinkBox>
    </Container>
  );
};

export default ShareCard;
