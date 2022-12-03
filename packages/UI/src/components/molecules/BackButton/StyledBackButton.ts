import styled from 'styled-components';
import { shadowStyles } from '../../atoms/Shadow';

export const BackButton = styled.a`
  font-family: ${({ theme }) => theme.fonts.normal};
  font-size: 14px;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: none;
  border-radius: ${({ type }) => (type === 'cancel' ? '4px' : '8px')};
  padding: ${({ type }) =>
    type === 'large' ? '12px 16px' : type === 'cancel' ? '8px' : '8px 16px'};
  background: ${({ theme }) => theme.colors.GREYSCALE_WHITE};
  ${({ type }) =>
    type === 'cancel'
      ? shadowStyles.shadow500
      : 'box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)'};
  color: ${({ theme }) => theme.colors.GREYSCALE_BLACK};
  cursor: pointer;
`;
