import styled from 'styled-components';
import { paddingStyles } from '../../atoms/Padding';
import { radiusStyles } from '../../atoms/Radius/StyledRadius';
import { shadowStyles } from '../../atoms/Shadow';
import { typographyStyles } from '../../atoms/Typography';

export const BackButton = styled.a`
  ${typographyStyles['label']}
  ${({ type }) =>
    type === 'cancel'
      ? `${shadowStyles.shadow500}
      ${radiusStyles['radius100']}
      ${paddingStyles['uniPad200']}`
      : `box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      ${radiusStyles['radius200']}
      ${paddingStyles['comPad100']}`}
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.colors.GREYSCALE_WHITE};
  color: ${({ theme }) => theme.colors.GREYSCALE_BLACK};
  cursor: pointer;
`;
