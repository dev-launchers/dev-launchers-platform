import * as React from 'react';
import { Icons } from '../../../assets';
import Typography from '../../atoms/Typography';
import { Container } from './StyledAlert';
import type { AlertProps } from '.';

const Alert: React.FC<React.PropsWithChildren<AlertProps>> = ({
  signal = 'notify',
  handleClose,
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
      <Typography css={{ flex: 1 }}>{children}</Typography>
      <button>
        <Icons.Close onClick={handleClose} />
      </button>
    </Container>
  );
};

export default Alert;
