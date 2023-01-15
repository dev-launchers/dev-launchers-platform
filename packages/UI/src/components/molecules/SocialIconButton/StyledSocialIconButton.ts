import styled from 'styled-components';
import { radiusStyles } from '../../atoms/Radius/StyledRadius';
import { shadowStyles } from '../../atoms/Shadow';

export const Wrapper = styled.button`
  background-color: ${({ theme }) => theme.colors.GREYSCALE_WHITE};
  color: ${({ theme }) => theme.colors.GREYSCALE_BLACK};
  border: none;
  cursor: pointer;
  ${shadowStyles['shadow500']};
  ${radiusStyles['radius100']};
`;
