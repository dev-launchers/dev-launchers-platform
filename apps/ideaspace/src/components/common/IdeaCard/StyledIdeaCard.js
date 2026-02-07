import styled from 'styled-components';
import { atoms } from '@devlaunchers/components/src/components';
import Avatar from '@devlaunchers/components/src/components/atoms/Avatar/Avatar';

export const StatuBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  align-items: center;
  border-radius: 1rem;
  z-index: 1;
  position: relative;
  left: 1.5rem;
  top: 1rem;
  padding: 0.2rem 0.4rem;

  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  text-transform: uppercase;
  color: #000000;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const AuthorProfilePicture = styled(Avatar)`
  width: 36px;
  height: 36px;
  border-radius: 36px;

  //== set child elements to 100% width and height
  & > * {
    width: 100%;
    height: 100%;
  }
`;
