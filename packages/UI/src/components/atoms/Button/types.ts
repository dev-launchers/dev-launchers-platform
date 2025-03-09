import { EventHandler, ReactNode } from 'react';

export type ColorType =
  | 'pure'
  | 'uranus'
  | 'jupiter'
  | 'neptune'
  | 'saturn'
  | 'cosmic'
  | 'nebula'
  | 'info'
  | 'warning'
  | 'success'
  | 'error';

type AlertType = 'none' | 'info' | 'warning' | 'success' | 'error';

export type PropsType = {
  mode?: 'light' | 'dark';
  type?: 'primary' | 'secondary' | 'tertiary';
  color?: ColorType;
  iconPosition?: 'right' | 'left';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: EventHandler<any>;
  children?: ReactNode;
  as?: 'button' | 'a';
  href?: string;
  icon?: ReactNode;
  target?: string;
  isAlert?: boolean;
  alertType?: AlertType;
};
