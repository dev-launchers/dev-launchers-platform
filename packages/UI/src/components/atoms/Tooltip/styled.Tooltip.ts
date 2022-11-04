import styled from 'styled-components';
import { typographyStyles } from '../Typography';

export const ToolTip = styled.div`
  ${typographyStyles['placeHolder']};
  opacity: 0;
  position: absolute;
  bottom: 10%;
  border-radius: 0.5rem;
  padding: 0.625rem;
  color: ${({ theme }) => theme.colors.GREYSCALE_OFF_WHITE};
  &:hover {
    background-color: ${({ theme }) => theme.colors.GREYSCALE_BLACK};
    opacity: 1;
  }
`;
export const Wrapper = styled.div`
  position: relative;
`;
export const ToolTipTrigger = styled.div`
  width: fit-content;
`;
