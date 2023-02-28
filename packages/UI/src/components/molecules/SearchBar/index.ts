export { default } from './SearchBar';
import type { ChangeEvent } from 'react';

export interface SearchBarProps {
  width: 'small' | 'medium' | 'large';
  mode: 'light' | 'dark';
  hasButton?: boolean;
  placeholder: string;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
}
