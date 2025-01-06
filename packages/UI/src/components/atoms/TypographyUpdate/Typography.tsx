import React from 'react';
import { generateClasses } from './typographyHelpers';
import type { TypographyProps } from './index';

const Typography: React.FC<TypographyProps> = ({
  as: Tag = 'p',
  children,
  text,
  ...props
}) => {
  const classes = generateClasses({ ...props });
  return <Tag className={`${classes}`}>{children}</Tag>;
};

export default Typography;
