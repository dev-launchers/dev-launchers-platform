import * as React from 'react';
import { Icons } from '../../../assets';
import Typography from '../../atoms/Typography';
import { Container } from './StyledAlert';
import type { AlertProps } from '.';

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: '-100%' },
};

const Alert: React.FC<React.PropsWithChildren<AlertProps>> = ({
  signal = 'notify',
  handleClose,
  isInitallyOpen = true,
  children,
  ...rest
}) => {
  const [isOpen, setIsOpen] = React.useState(isInitallyOpen);
  return (
    <Container
      signal={signal}
      {...rest}
      variants={variants}
      initial={{ opacity: 0, y: '-100%' }}
      animate={isOpen ? 'open' : 'closed'}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
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
      <button
        onClick={(e) => {
          setIsOpen((prev) => !prev);
          handleClose?.(e);
        }}
      >
        <Icons.Close />
      </button>
    </Container>
  );
};

export default Alert;
