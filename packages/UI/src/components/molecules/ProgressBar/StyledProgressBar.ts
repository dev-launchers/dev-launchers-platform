import { radiusStyles } from '../../atoms/Radius';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.NOTIFICATION};
  ${radiusStyles['radius300']};
`;
