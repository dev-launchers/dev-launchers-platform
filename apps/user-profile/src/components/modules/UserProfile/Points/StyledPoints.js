import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: max-content;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.headline};
  font-weight: bold;
  /* border: 1px solid ${({ theme }) => theme.colors.GREYSCALE_OFF_BLACK}; */
  & > * {
    padding: 15px;
  }
  @media (orientation: portrait) {
    display: block;
  }
`;
export const Container = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.GREYSCALE_OFF_BLACK};
  padding: 0;
  @media (orientation: portrait) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;
export const Title = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.GREYSCALE_OFF_BLACK};
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.GREYSCALE_OFF_BLACK};
`;
export const PointsNumber = styled.span`
  color: black;
`;
