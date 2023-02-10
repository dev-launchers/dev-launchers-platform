import styled from 'styled-components';
import { radiusStyles } from '../../../atoms/Radius/StyledRadius';
import { shadowStyles } from '../../../atoms/Shadow';
import type { PositionCardProps } from '.';

export const Container = styled.div<Pick<PositionCardProps, 'minimal'>>`
  ${({ minimal }) => minimal && shadowStyles.shadow500};
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.GREYSCALE_WHITE};
  ${radiusStyles.radius300};
  max-width: ${({ minimal }) => (minimal ? '360px' : '1121px')};
  display: flex;
  flex-direction: column;
  gap: 32px;
  transition: 0.5s height ease;
`;

export const Header = styled.div`
  display: flex;
  gap: 24px;

  transition: 0.4s all ease;

  & > *:nth-child(2) {
    padding: 32px 8px 16px;
  }
  & > *:nth-child(3) {
    padding: 32px 32px 16px 8px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    gap: 16px;
    flex-wrap: wrap;

    & > *:nth-child(2) {
      order: 3;
      padding: 0px 16px 16px 32px;
    }
    & > *:nth-child(3) {
      order: 2;
      padding: 0px 32px 16px;
      div {
        max-width: 100%;
      }
    }
  }
`;

export const Thumbnail = styled.div<
  Pick<PositionCardProps, 'minimal'> & {
    imgUrl?: PositionCardProps['content']['imgUrl'];
  }
>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  border-radius: 16px;
  flex: 1;
  flex-shrink: 0;
  background: white;
  background-size: cover;
  gap: 8px;
  width: 100%;
  overflow: hidden;
  min-width: 360px;

  color: ${({ minimal }) => (minimal ? 'black' : 'white')};
  padding: ${({ minimal }) =>
    minimal ? '40px 32px 20px 32px' : '40px 16px 20px 16px'};

  background-image: ${({ minimal, imgUrl }) =>
    minimal
      ? 'white'
      : `linear-gradient(rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.64)), url(${imgUrl})`};
`;

export const interactions = styled.div<Pick<PositionCardProps, 'interaction'>>`
  width: ${({ interaction }) => (interaction === 'all-h' ? '100%' : 'auto')};
  gap: ${({ interaction }) => (interaction === 'all-h' ? 'unset' : '16px')};
  justify-content: space-between;
  flex-direction: ${({ interaction }) =>
    interaction === 'all-v' ? 'column' : 'row'};
  height: ${({ interaction }) => (interaction === 'all-v' ? '100%' : 'auto')};
  position: absolute;
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

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    flex-wrap: wrap;
    padding: 0 32px;
  }
`;
