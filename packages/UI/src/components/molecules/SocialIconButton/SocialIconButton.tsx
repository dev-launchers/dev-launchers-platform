import { Icons } from '../../../assets';
import Box from '../../atoms/Box';
import { Wrapper } from './StyledSocialIconButton';
import type { SocialIconButtonProps } from '.';

const getIcon = (type: SocialIconButtonProps['type']) => {
  switch (type) {
    case 'twitter':
      return <Icons.Twitter width="29px" height="24px" />;
    case 'facebook':
      return <Icons.Facebook width="24px" height="24px" />;
    case 'linkedin':
      return <Icons.Linkedin width="24px" height="24px" />;
    case 'mail':
      return <Icons.Mail width="26px" height="24px" />;
    case 'whatsApp':
      return <Icons.WhatsApp width="26px" height="24px" />;
    case 'reddit':
      return <Icons.Reddit width="26px" height="24px" />;
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
