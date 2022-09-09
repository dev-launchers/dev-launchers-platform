import styled from 'styled-components';

export const ItemContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  font-family: ${({ theme }) => theme?.fonts?.normal};
  background: ${({ theme }) => theme?.colors?.White};
  display: flex;
  flex-direction: row;
  border-radius: 1.875rem;
  min-height: 168px;

  @media (max-width: 760px) {
    flex-direction: column;
    border-radius: 10px;
  }
`;

export const Section = styled.div<{
  bgColor?: string;
  color?: string;
  width?: number;
}>`
  width: ${(props) => (props.width ? props.width : '50%')};
  background-color: ${(props) =>
    props.bgColor ? props.theme.colors[props.bgColor] : 'transparent'};
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : 'inherit'};
  border-radius: 1.875rem;
  padding: 20px;
  @media (max-width: 760px) {
    width: 100%;
    padding: 1rem 0;
    border-radius: 10px;
  }
`;
export const InfoSection = styled.div`
  padding: 33px 28px;
  padding-bottom: 22px;
  height: 100%;

  & h2,
  h3,
  p {
    padding: 0;
    padding-bottom: 0px;
    margin: 0;
  }
  & h2 {
    font-family: ${({ theme }) => theme.fonts.headline};
    font-weight: 400;
    font-size: 27px;
    margin-bottom: 11px;
  }
  & h3 {
    font-family: ${({ theme }) => theme?.fonts?.normal};
    color: ${({ theme }) => theme?.colors?.LightGray};
    font-weight: 400;
    font-size: 16px;
    font-style: italic;
    margin-bottom: 13px;
    margin-left: 13px;
  }
  & p {
    margin-left: 13px;
    font-family: ${({ theme }) => theme?.fonts?.normal};
    font-weight: 400;
    font-size: 16px;
    max-width: 24rem;
  }

  @media (max-width: 760px) {
    padding: 20px;

    & h2,
    h3,
    p {
      margin-left: 0px;
    }
  }
`;
export const DetailsSection = styled.div`
  position: relative;
  display: block;
  height: 100%;
  box-sizing: border-box;
  //padding: 20px 20px;
  padding-bottom: 0;
  @media (max-width: 760px) {
    padding: 0;
  }
`;
export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 760px) {
    display: none;
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme?.fonts?.normal};
  font-weight: 700;
  font-size: 16px;
`;

export const PositionsContainer = styled.div`
  & ul {
    list-style-type: disc;
    padding-left: 1rem;
  }

  & li {
    font-family: ${({ theme }) => theme?.fonts?.normal};
    display: list-item;
    font-size: 15px;
  }
`;

export const PositionTitle = styled.span`
  font-weight: 700;
`;

export const PositionLevel = styled.span`
  //padding-left: 0.5rem;
  font-style: italic;
  font-weight: 300;
`;

export const CommitmentContainer = styled.div`
  padding-left: 2rem;
  & p {
    padding: 0;
    margin: 0;
    font-family: ${({ theme }) => theme?.fonts?.normal};
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
  }
`;
export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  margin-top: auto;
  @media (max-width: 760px) {
    padding: 0;
  }
`;

export const PositionsButton = styled.button`
  font-family: ${({ theme }) => theme?.fonts?.normal};
  border: none;
  color: ${({ theme }) => theme?.colors?.White};
  background: ${({ theme }) => theme.colors.Gray};
  border-radius: 30px;
  font-weight: 400;
  font-size: 14px;
  padding: 6px 13px;

  @media (max-width: 760px) {
    display: none;
  }
`;
export const DetailsButton = styled.a`
  box-sizing: border-box;
  font-family: ${({ theme }) => theme?.fonts?.normal};
  border: none;
  color: ${({ theme }) => theme?.colors?.White};
  background: ${({ theme }) => theme?.colors?.DarkElectricBlue};
  border-radius: 30px;
  font-weight: 400;
  font-size: 14px;
  padding: 6px 13px;
  margin-left: auto;
  text-align: center;

  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme?.colors?.White};
  }

  @media (max-width: 760px) {
    margin: auto;
    width: 90%;
    border-radius: 10px;
    font-weight: 400;
    font-size: 16px;
  }
`;
