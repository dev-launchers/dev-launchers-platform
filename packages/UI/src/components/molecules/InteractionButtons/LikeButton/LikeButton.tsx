import axios from 'axios';
import Like from '../../../../assets/icons/Like';
import Box from '../../../atoms/Box';
import { InteractionButton } from '../StyledCommonComponents';
import type { LikeButtonProps } from '.';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';

const LikeButton = ({ text, filled, disabled, ...props }: LikeButtonProps) => {
  return (
    <InteractionButton disabled={disabled} {...props}>
      <Box gap="8px" justifyContent="center" alignItems="center">
        <Like
          fill={filled ? (disabled ? '#474747' : 'black') : ''}
          stroke={disabled ? '#474747' : ''}
        />
        {text}
      </Box>
    </InteractionButton>
  );
};

export default LikeButton;
