import styled from 'styled-components';
import { radiusStyles } from '../../../atoms/Radius/StyledRadius';
import { shadowStyles } from '../../../atoms/Shadow';
import type { ShareCardProps } from '.';
import { typographyStyles } from '../../../atoms/Typography';

export const ShareLinkButton = styled.button`
  background-color: ${({ theme }) => theme.colors.GREYSCALE_WHITE};
  color: ${({ theme }) => theme.colors.GREYSCALE_BLACK};
  border: none;
  cursor: pointer;
  ${shadowStyles['shadow500']};
  ${radiusStyles['radius100']};
  position: absolute;
  left: 20px;
  top: 5px;
`;

export const ShareInput = styled.input`
  ${typographyStyles['placeHolder']};
  color: ${({ theme }) => theme.colors.GREYSCALE_GREY};
  border: 1px solid black;
  ${radiusStyles['radius200']};
  padding-left: 55px;
  height: 40px;
`;
