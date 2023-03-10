export { default } from './PositionCard';

export interface PositionCardProps {
  interaction?: 'all-h' | 'all-v' | 'save-only';
  minimal?: boolean;
  buttonStyle: 'a' | 'b';
  status: boolean;
  content: {
    imgUrl: string;
    expectations: string[];
    commitmentHoursPerWeek: string;
    description: string;
    skills: string[];
    benifits: string[];
    level: string;
    title: string;
  };
  handleMoreDetails: () => void;
  handleApply: () => void;
}
