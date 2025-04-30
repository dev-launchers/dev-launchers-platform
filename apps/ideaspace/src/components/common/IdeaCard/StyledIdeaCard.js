import styled from 'styled-components';
import { atoms } from '@devlaunchers/components/src/components';
import Avatar from '@devlaunchers/components/src/components/atoms/Avatar/Avatar';

export const IdeaCardButton = styled((props) => (
  <atoms.Button buttonSize="standard" buttonType="alternative" {...props} />
))`
  margin: 0rem 1.25rem 0rem;
`;

export const ImgButton = styled.button`
  padding: 0rem 0rem 1rem;
  width: 100%;
`;

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

export const ActivityDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
`;

export const AuthorProfilePicture = styled(Avatar)`
  width: 28px;
  height: 28px;
  border-radius: 28px;

  //== set child elements to 100% width and height
  & > * {
    width: 100%;
    height: 100%;
  }
`;
