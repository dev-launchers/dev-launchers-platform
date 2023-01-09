import Share from '../../../../assets/icons/Share';
import Box from '../../../atoms/Box';
import { InteractionButton } from '../StyledCommonComponents';
import type { ShareButtonProps } from '.';

const ShareButton = ({ text, disabled }: ShareButtonProps) => {
  return (
    <InteractionButton disabled={disabled}>
      <Box gap="8px" justifyContent="center" alignItems="center">
        <Share />
        {text}
      </Box>
    </InteractionButton>
  );
};

export default ShareButton;
