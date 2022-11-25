import * as React from 'react';
import { Icons } from '../../../assets';
import { Container, Text } from './StyledAlert';
import type { AlertProps } from '.';

const Alert: React.FC<AlertProps> = ({
  signal = 'notify',
  children,
  ...rest
}) => {
  return (
    <Container signal={signal} {...rest}>
      {signal === 'error' ? (
        <Icons.Error />
      ) : signal === 'success' ? (
        <Icons.Success />
      ) : signal === 'notify' ? (
        <Icons.Bell />
      ) : (
        <></>
      )}
      <Text signal={signal}>{children}</Text>
      <Icons.Close />
    </Container>
  );
};

export default Alert;
