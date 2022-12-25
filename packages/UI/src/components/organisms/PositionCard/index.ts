export { default } from './PositionCard';

export interface PositionCardProps {
  // interaction: boolean;
  // status: boolean;
  interaction: 'all-h' | 'all-v' | 'save-only' | 'none';
  style: 'default' | 'minimal' | 'mobile' | 'long';
  buttonStyle: 'a' | 'b';
  status: 'default' | 'open' | 'closed';
}
