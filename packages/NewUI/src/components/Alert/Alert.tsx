import * as React from 'react';
import Bell from '../../icons/Bell';
import Close from '../../icons/Close';
import Error from '../../icons/Error';
import Success from '../../icons/Success';
import { Container, Text } from './StyledAlert';
import type { AlertProps } from '.';

const Alert: React.FC<AlertProps> = ({ signal, children, ...rest }) => {
  console.log(close);

  return (
    <Container signal={signal} {...rest}>
      {signal === 'error' ? (
        <Error />
      ) : signal === 'success' ? (
        <Success />
      ) : signal === 'notify' ? (
        <Bell />
      ) : (
        <></>
      )}
      <Text signal={signal}>{children}</Text>
      <Close />
    </Container>
  );
};

export default Alert;
