export { default } from './SocialIconButton';

export interface SocialIconButtonProps {
  type:
    | 'twitter'
    | 'facebook'
    | 'instagram'
    | 'linkedin'
    | 'slack'
    | 'github'
    | 'discord'
    | 'whatsApp'
    | 'reddit';
  onClick: React.MouseEventHandler;
  body: string;
}
