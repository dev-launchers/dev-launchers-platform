import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.White};
  padding: 6rem;
  @media (max-width: 1536px) {
    padding: 2rem;
  }
`;
export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.White};
  border-radius: 30px;
  padding-bottom: 2rem;

  & > h2 {
    padding: 15px 32px;
    margin-top: 0;
    background-color: ${({ theme }) => theme.colors.White};
    border-radius: 30px;
    font-family: ${({ theme }) => theme?.fonts?.normal};
    font-style: normal;
    font-weight: 600;
    font-size: 19.5px;
    line-height: 27px;
    text-transform: capitalize;
  }
`;

export const PositionsList = styled.div`
  padding: 0 24px;

  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  @media (max-width: 640px) {
    padding: 0 5px;
  }
`;

export const CardWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  gap: 26px;
  flex-wrap: wrap;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: max-content;
  background-color: ${({ theme }) => theme?.colors?.NEUTRAL_2};
  border-radius: 30px;
  flex: 1 1 600px;
  & > h2 {
    padding: 15px 32px;
    margin-top: 0;
    background-color: ${({ theme }) => theme.colors.NEUTRAL_1};
    color: ${({ theme }) => theme.colors.NEUTRAL_2};
    border-radius: 30px;
    font-family: ${({ theme }) => theme?.fonts?.normal};
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    text-transform: capitalize;
  }
`;

export const CardContent = styled.div`
  height: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: ${({ theme }) => theme?.fonts?.normal};
  box-sizing: border-box;
  padding: 0 36px;
  padding-bottom: 12px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  & p {
    display: list-item;
    flex: 1 1 auto;
    height: 100%;
  }
`;

export const CardButton = styled.button`
  flex: 0 1 auto;
  font-family: ${({ theme }) => theme?.fonts?.normal};
  box-sizing: border-box;
  padding: 12px 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 11px;
  border: none;
  background: ${({ theme }) => theme?.colors?.DarkElectricBlue};
  color: ${({ theme }) => theme?.colors?.White};
  border-radius: 30px;
  margin-top: auto;
  margin-left: auto;
  display: block;
`;

export const BackButton = styled.a`
  font-family: ${({ theme }) => theme?.fonts?.normal};
  font-size: 1rem;
  padding: 4px 4px;
  display: inline-flex;
  align-items: center;
  border: none;
  background: ${({ theme }) => theme?.colors?.White};
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  color: ${({ theme }) => theme?.colors?.Black};

  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme?.colors?.White};
  }

  & svg {
    margin-right: 0rem;
    height: 20px;
    width: 20px;
  }
`;

export const RowContainer = styled.div<{
  paddingHorizontal?: number;
  paddingVertical?: number;
  justifycontent?: string;
}>`
  box-sizing: border-box;
  width: 100%;
  margin: auto auto;
  padding-top: ${({ paddingVertical }) =>
    paddingVertical ? `${paddingVertical}px` : 0};
  padding-bottom: ${({ paddingVertical }) =>
    paddingVertical ? `${paddingVertical}px` : 0};
  padding-left: ${({ paddingHorizontal }) =>
    paddingHorizontal ? `${paddingHorizontal}px` : 0};
  padding-right: ${({ paddingHorizontal }) =>
    paddingHorizontal ? `${paddingHorizontal}px` : 0};

  display: flex;
  align-items: start;
  justify-content: ${({ justifycontent }) =>
    justifycontent ??
    'space-between'}; /* Distribute items evenly along the row */
`;
