import styled from 'styled-components';
import { paddingStyles } from '../../atoms/Padding';
import { radiusStyles } from '../../atoms/Radius/StyledRadius';
import { shadowStyles } from '../../atoms/Shadow';
import { typographyStyles } from '../../atoms/Typography';

export const InteractionButton = styled.button`
  background-color: ${({ theme }) => theme.colors.GREYSCALE_WHITE};
  color: ${({ theme }) => theme.colors.GREYSCALE_BLACK};
  border: none;
  cursor: pointer;
  ${shadowStyles['shadow500']};
  ${paddingStyles['comPad100']};
  ${radiusStyles['radius200']};
  ${typographyStyles['button']};

  &:focus {
    outline: none;
    filter: none;
    ${shadowStyles['innerShadow100']};
    background-color: ${({ theme }) => theme.colors.GREYSCALE_WHITE};
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.GREYSCALE_OFF_WHITE};
    color: ${({ theme }) => theme.colors.GREYSCALE_CHARCOAL};
  }
`;
