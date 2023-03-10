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
  left: 20px;
  top: 5px;
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
  max-width: 480px;
  max-height: 300px;
  padding: 12px;
  display: inline-block;
`;

export const CloseButton = styled(Button)`
  text-align: center;
  position: relative;
  width: 30px;
  height: 30px;
`;

export const CloseIcon = styled(Close)`
  top: 50%;
  left: 50%;
  position: absolute;
`;

export const ShareIdeaText = styled(Typography)`
  padding: 0px 0px 22px 0px;
`;

export const ShareLinkText = styled(Typography)`
  padding: 0px 0px 0px 15px;
`;

export const ShareLinkBox = styled(Box)`
  position: relative;
`;
