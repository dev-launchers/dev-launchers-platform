import styled from 'styled-components';
import { typographyStyles } from '../Typography';

interface LinkProps {
  href?: string;
  text?: string;
}

const Link = styled.a<LinkProps>`
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

export default Link;
