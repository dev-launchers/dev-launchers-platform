export { default } from './SocialIconButton';

export interface SocialIconButtonProps {
  type: 'twitter' | 'facebook' | 'linkedin' | 'mail' | 'whatsApp' | 'reddit';
  onClick?: React.MouseEventHandler;
  body?: string;
}
