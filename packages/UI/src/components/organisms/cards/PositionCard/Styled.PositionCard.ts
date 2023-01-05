import styled from 'styled-components';
import { radiusStyles } from '../../../atoms/Radius/StyledRadius';
import { shadowStyles } from '../../../atoms/Shadow';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.GREYSCALE_WHITE};
  ${radiusStyles.radius300};
  max-width: 1121px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  overflow: hidden;
  transition: 0.5s height ease;
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 576px) {
    flex-direction: column;

    & > *:nth-child(2) {
      order: 3;
    }
    & > *:nth-child(3) {
      order: 2;
      div {
        max-width: 100%;
      }
    }
  }
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
  transition: 0.4s height ease-in-out;
`;
