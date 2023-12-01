import styled from 'styled-components';
import RocketIll from '../../../images/TalcommPage/rocket-illustration.png';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme?.colors?.SilverSandT20};
`;

export const Wrap = styled.div`
  /* &.background-image {
    opacity: 75%;
    border-spacing: 300px;
  } */
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url(${RocketIll});
  background-size: cover;
  background-position: center;
  height: 455px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24;
  display: inline-flex;
  width: 100%;
  padding-left: 196px;
  padding-right: 196px;
  display: flex;
  overflow: hidden;
`;
