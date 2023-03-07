import { Icons } from '../../../assets';
import Box from '../../atoms/Box';
import { Wrapper } from './StyledSocialIconButton';
import type { SocialIconButtonProps } from '.';

const getIcon = (type: string) => {
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
    case 'mail':
      return <Icons.Mail width="26px" height="24px" />;
  }
};

function SocialButton({ type, onClick }: SocialIconButtonProps) {
  return (
    <Wrapper onClick={onClick}>
      <Box alignItems="center" justifyContent="center" padding="8px">
        {getIcon(type)}
      </Box>
    </Wrapper>
  );
}

export default SocialButton;
