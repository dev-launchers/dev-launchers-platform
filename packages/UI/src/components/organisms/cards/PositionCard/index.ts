export { default } from './PositionCard';

export interface PositionCardProps {
  interaction: 'all-h' | 'all-v' | 'save-only' | 'none';
  minimal: boolean;
  buttonStyle: 'a' | 'b';
  status: boolean;
  content: any;
}
