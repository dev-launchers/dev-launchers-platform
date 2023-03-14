import styled from 'styled-components';
import Box from '../../../atoms/Box';
import Close from '../../../../assets/icons/Close';
import Button from '../../../atoms/Button';
import Layer from '../../../atoms/Layer';
import { radiusStyles } from '../../../atoms/Radius/StyledRadius';
import { shadowStyles } from '../../../atoms/Shadow';
import Typography, { typographyStyles } from '../../../atoms/Typography';
import type { ShareCardProps } from '.';

export const ShareLinkButton = styled.button`
  background-color: ${({ theme }) => theme.colors.GREYSCALE_WHITE};
  color: ${({ theme }) => theme.colors.GREYSCALE_BLACK};
  border: none;
  cursor: pointer;
  ${radiusStyles.radius100};
  position: absolute;
  margin-left: 15px;
  ${shadowStyles['shadow300']};
  padding: 1px;
`;

export const ShareInput = styled.input`
  ${typographyStyles.placeHolder};
  color: ${({ theme }) => theme.colors.GREYSCALE_GREY};
  border: 1px solid black;
  ${radiusStyles.radius200};
  padding-left: 55px;
  height: 40px;
`;

export const Container = styled(Layer)`
  border-radius: 10px;
  width: 275px;
  height: 250px;
  padding: 12px;
  display: inline-block;
  @media only screen and (min-width: 640px) {
    width: 350px;
  }
`;

export const CloseButton = styled(Button)`
  text-align: center;
  position: relative;
  width: 30px;
  height: 30px;
`;

export const CloseIcon = styled(Close)`
  top: 20%;
  left: 20%;
  position: absolute;
`;

export const ShareIdeaText = styled(Typography)`
  padding: 0px 0px 22px 0px;
`;

export const ShareLinkText = styled(Typography)`
  padding-left: 10px;
`;

export const ShareLinkBox = styled(Box)`
  position: relative;
`;
