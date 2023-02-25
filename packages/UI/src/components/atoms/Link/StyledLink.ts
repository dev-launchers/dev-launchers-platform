import styled from 'styled-components';
import { radiusStyles } from '../Radius/StyledRadius';
import { typographyStyles } from '../Typography';

export const StyledLink = styled.a`
  ${typographyStyles.link}
  color: ${({ theme }) => theme.colors.BLUE};

  &:visited {
    color: ${({ theme }) => theme.colors.BLUE_700};
  }

  &:hover {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.BLUE_600};
  }

  &:focus {
    color: ${({ theme }) => theme.colors.BLUE_600};
    border: 1px dashed ${({ theme }) => theme.colors.GREYSCALE_GREY};
    ${radiusStyles.radius100};
    background-color: ${({ theme }) => theme.colors.LIGHT_BLUE_200};
  }

  &:active {
    color: ${({ theme }) => theme.colors.BLUE_600};
  }

  &:disabled {
    font-style: italic;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.GREYSCALE_CHARCOAL};
  }
`;
