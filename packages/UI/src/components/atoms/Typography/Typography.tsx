import * as React from 'react';
import { Text } from './Styled.Typography';
import type { TypographyProps } from '.';

const Typography: React.FC<TypographyProps> = ({ type, children, ...rest }) => {
  return (
    <Text type={type} as={type[0] === 'p' ? type[0] : type} {...rest}>
      {children}
    </Text>
  );
};

export default Typography;
