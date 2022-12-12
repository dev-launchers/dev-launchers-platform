import styled from 'styled-components';
import { shadowStyles } from '../../atoms/Shadow';
import { typographyStyles } from '../../atoms/Typography';

export const BackButton = styled.a`
  ${typographyStyles['label']}
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: ${({ type }) => (type === 'cancel' ? '4px' : '8px')};
  padding: ${({ type }) => (type === 'cancel' ? '8px' : '8px 16px')};
  background: ${({ theme }) => theme.colors.GREYSCALE_WHITE};
  ${({ type }) =>
    type === 'cancel'
      ? shadowStyles.shadow500
      : 'box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)'};
  color: ${({ theme }) => theme.colors.GREYSCALE_BLACK};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    padding: ${({ type }) => (type === 'cancel' ? '8px' : '12px 16px')};
  }
`;
