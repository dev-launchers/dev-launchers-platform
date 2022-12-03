import Chevron from '../../../assets/icons/Chevron';
import Close from '../../../assets/icons/Close';
import { BackButton } from './StyledBackButton';
import type { BackButtonProps } from '.';

function BackButtonComponent({ type, withLabel = true }: BackButtonProps) {
  return (
    <BackButton type={type}>
      {type === 'cancel' ? (
        <Close stroke="black" width="24px" height="24px" />
      ) : (
        <Chevron
          width="24px"
          height="24px"
          stroke="black"
          strokeWidth="2"
          style={{ transform: 'rotate(90deg)' }}
        />
      )}
      {withLabel && 'Back'}
    </BackButton>
  );
}

export default BackButtonComponent;
