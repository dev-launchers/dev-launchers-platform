export { default } from './SocialIconButton';

export interface SocialIconButtonProps {
  type:
    | 'twitter'
    | 'facebook'
    | 'instagram'
    | 'linkedin'
    | 'slack'
    | 'github'
    | 'discord';
  onClick: React.MouseEventHandler;
}
