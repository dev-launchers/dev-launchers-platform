import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  margin: 40px;
  @media (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
    justify-content: center
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  margin-right: 25px;
  margin-left: 25px;
  @media (max-width: 1280px) {
    width: 70%;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  margin-right: 25px;
  margin-left: 25px;
  @media (max-width: 1280px) {
    width: 70%;
  }
`;

export const TopView = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  margin-bottom: 25px;
  @media (max-width: 1280px) {
    flex-direction: column;
  }
`;

export const BottomView = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-top: 25px;
`;
