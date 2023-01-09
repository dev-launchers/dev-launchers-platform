import Save from '../../../../assets/icons/Save';
import { Box } from '../../../atoms';
import { InteractionButton } from '../StyledCommonComponents';
import type { SaveButtonProps } from '.';

const SaveButton = ({ text, filled, disabled }: SaveButtonProps) => {
  return (
    <InteractionButton disabled={disabled}>
      <Box gap="8px" justifyContent="center" alignItems="center">
        <Save fill={filled ? 'black' : ''} />
        {text}
      </Box>
    </InteractionButton>
  );
};

export default SaveButton;
