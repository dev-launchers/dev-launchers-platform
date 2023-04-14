import SocialIconButton from '../../../molecules/SocialIconButton';
import React, { useContext , useState } from 'react';
import { atoms } from '@devlaunchers/components/src/components';
import type { ShareCardProps } from '.';
import Link from '../../../../assets/icons/Link';
import Checkmark from '../../../../assets/icons/Checkmark';
import { shareIdea, shareLink, timeout } from './ShareUrl';
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

const ShareCard = ({ title, platforms }: ShareCardProps) => {
  const [show, setShow] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState('Click to Copy');
  const handleTooltipMessage = async () => {
    setTooltipMessage('Link Copied!');
    await timeout(3000);
    setTooltipMessage('Click to Copy');
  };
  const handleClose = () => {
    setShow(false);
  };
  const currentLocation = window.location.href;

  const socialPlatforms = [
    'twitter',
    'facebook',
    'mail',
    'linkedin',
    'whatsApp',
    'reddit',
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
      <atoms.Box
        justifyContent="center"
        flexDirection="row"
        gap="5px"
        padding="0px 0px 22px 0px"
      >
        {socialPlatforms.map((socialPlatform, index) => (
          <SocialIconButton
            onClick={() => shareIdea(socialPlatform, currentLocation)}
            key={index}
            type={socialPlatform}
          />
        ))}
      </atoms.Box>
      <atoms.Box justifyContent="center">
        <atoms.Box flexDirection="column" gap="5px">
          <ShareLinkText type="label">Share With A Link</ShareLinkText>
          <ShareLinkBox flexDirection="row">
            <atoms.Box>
              <atoms.Box flexDirection="column" justifyContent="center">
                <ShareLinkButton
                  onClick={() => {
                    shareLink(currentLocation);
                    handleTooltipMessage();
                  }}
                >
                  <atoms.ToolTip
                    direction="top"
                    type="bubble"
                    content={tooltipMessage}
                  >
                    <Link
                      width="24px"
                      height="24px"
                      css={{ verticalAlign: 'middle' }}
                    />
                  </atoms.ToolTip>
                </ShareLinkButton>
              </atoms.Box>
              <ShareInput type="text" value={currentLocation} />
            </atoms.Box>
          </ShareLinkBox>
        </atoms.Box>
      </atoms.Box>
    </Container>
  );
};

export default ShareCard;
