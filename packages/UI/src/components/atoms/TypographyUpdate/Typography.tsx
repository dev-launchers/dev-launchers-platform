import React from 'react';
import { generateClasses } from './typographyHelpers';
import type { TypographyProps } from './index';

const Typography: React.FC<TypographyProps> = ({
  as: Tag = 'p',
  children,
  className,
  ...props
}) => {
  const classes = `${generateClasses({ ...props })} ${className || ''}`;

  return React.createElement(Tag, { className: classes, ...props }, children);
};

export default Typography;
