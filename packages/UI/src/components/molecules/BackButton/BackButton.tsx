import { useRouter } from 'next/router';
import Chevron from '../../../assets/icons/Chevron';
import Close from '../../../assets/icons/Close';
import { BackButton } from './StyledBackButton';
import type { BackButtonProps } from '.';

function BackButtonComponent({ type, withLabel = true }: BackButtonProps) {
  const router = useRouter();
  const finalSlashIndex = router.asPath.lastIndexOf('/');
  const previousPath = router.asPath.slice(0, finalSlashIndex);

  return (
    <BackButton type={type} onClick={() => router.push(previousPath)}>
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
