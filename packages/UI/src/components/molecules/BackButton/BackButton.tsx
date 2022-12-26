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
        <Chevron />
      )}
      {withLabel && type === 'back' && 'Back'}
    </BackButton>
  );
}

export default BackButtonComponent;
