import { Icons } from '../../../assets';
import Box from '../../atoms/Box';
import { Wrapper } from './StyledSocialIconButton';
import type { BackButtonProps } from '.';

function SocialButton({ type }: BackButtonProps) {
  const getIcon = () => {
    switch (type) {
      case 'twitter':
        return <Icons.Twitter width="29px" height="24px" />;
      case 'facebook':
        return <Icons.Facebook width="24px" height="24px" />;
      case 'instagram':
        return <Icons.Instagram width="24px" height="24px" />;
      case 'linkedin':
        return <Icons.Linkedin width="24px" height="24px" />;
      case 'slack':
        return <Icons.Slack width="24px" height="24px" />;
      case 'github':
        return <Icons.Github width="24px" height="24px" />;
      case 'discord':
        return <Icons.Discord width="32px" height="24px" />;
    }
  };
  return (
    <Wrapper>
      <Box alignItems="center" justifyContent="center" padding="8px">
        {getIcon()}
      </Box>
    </Wrapper>
  );
}

export default SocialButton;
