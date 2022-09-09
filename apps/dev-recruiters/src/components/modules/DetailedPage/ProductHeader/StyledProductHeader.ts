import styled from "styled-components";

export const Tags = styled.div`
  color: ${({ theme }) => theme.colors.SilverSand};
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 21px;
  padding: 6px;
  border: 1px solid ${({ theme }) => theme?.colors?.LightGrayT90};
  border-radius: 20px;
`;

export const ColumnTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.headline};
  color: ${({ theme }) => theme?.colors?.AntiFlashWhite};
  font-size: 3rem;
  font-weight: 400;
  padding: 0.375rem;
`;

export const HeaderBlock = styled.div`
  min-height: 7.5vh;
  font-family: ${({ theme }) => theme?.fonts?.normal};
`;

export const Column = styled.div<{ bgColor?: string; w?: string; fa?: string }>`
  background-color: ${({ bgColor, theme }) =>
    bgColor ? bgColor : theme?.colors?.Crayola};
  flex-basis: ${({ w }) => (w ? w : "50%")};
  align-items: ${({ fa }) => (fa ? fa : "flex-start")};
  display: flex;
  flex-direction: column;
  border-radius: 25px 25px 0px 0px;
  padding: 1rem;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  /* justify-content: space-between; */

  & > ${Tags} {
    margin-top: 1.375rem;
    margin-left: 1rem;
  }
`;

export const Type = styled.div`
  color: ${({ theme }) => theme?.colors?.LightGray};
  font-size: 1.5rem;
  font-weight: 400;
  font-style: italic;
  margin-left: 0.5rem;
  margin-bottom: 0.875rem;
  line-height: 2.5rem;
`;

export const Vision = styled.div`
  color: ${({ theme }) => theme?.colors?.LightGray};
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 1rem;
  line-height: 2.5rem;
`;

export const Username = styled.div`
  color: ${({ theme }) => theme.colors.SilverSand};
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.1875rem;
`;
export const UsernameAvatar = styled.img`
  width: 2.1875rem;
  height: 2.1875rem;
`;
export const CreationDate = styled.div`
  color: ${({ theme }) => theme.colors.SilverSand};
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.1875rem;
`;
export const Commitment = styled.div`
  color: ${({ theme }) => theme.colors.SilverSand};
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.1875rem;
`;
