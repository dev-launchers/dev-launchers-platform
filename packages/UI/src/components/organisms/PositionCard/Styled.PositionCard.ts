import styled from 'styled-components';
import { radiusStyles } from '../../atoms/Radius/StyledRadius';
import { shadowStyles } from '../../atoms/Shadow';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.GREYSCALE_WHITE};
  ${radiusStyles.radius300};
  width: 1121px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const Actions = styled.div`
  background: ${({ theme }) => theme.colors.GREYSCALE_WHITE};
  ${radiusStyles.radius300};
  ${shadowStyles.shadow500};
  padding: 16px 0;
`;

export const Details = styled.div`
  display: flex;
  padding: 0 48px;
  gap: 24px;
  overflow: hidden;
  height: 0;
  /* height: ${({ open }) => (open === 'open' ? '200px' : '0')}; */
  transition: 0.5s height ease;
`;
