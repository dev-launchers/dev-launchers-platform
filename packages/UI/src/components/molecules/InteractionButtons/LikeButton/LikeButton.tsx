import Like from '../../../../assets/icons/Like';
import Box from '../../../atoms/Box';
import { InteractionButton } from '../StyledCommonComponents';
import type { LikeButtonProps } from '.';

const LikeButton = ({ text, filled, ...props }: LikeButtonProps) => {
  return (
    <InteractionButton {...props}>
      <Box gap="8px" justifyContent="center" alignItems="center">
        <Like />
        {text}
      </Box>
    </InteractionButton>
  );
};

export default LikeButton;
