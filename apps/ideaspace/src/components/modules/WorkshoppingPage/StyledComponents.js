import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.NEUTRAL_2};
  box-sizing: border-box;
  padding: 25px;
  min-height: 100%;
  width: 100%;
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;