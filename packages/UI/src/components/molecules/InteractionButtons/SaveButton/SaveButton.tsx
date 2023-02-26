import Save from '../../../../assets/icons/Save';
import { Box } from '../../../atoms';
import { InteractionButton } from '../StyledCommonComponents';
import type { SaveButtonProps } from '.';

const SaveButton = ({ text, filled, disabled, ...props }: SaveButtonProps) => {
  return (
    <InteractionButton disabled={disabled} {...props}>
      <Box gap="8px" justifyContent="center" alignItems="center">
        <Save
          fill={filled ? (disabled ? '#474747' : 'black') : ''}
          stroke={disabled ? '#474747' : ''}
        />
        {text}
      </Box>
    </InteractionButton>
  );
};

export default SaveButton;
