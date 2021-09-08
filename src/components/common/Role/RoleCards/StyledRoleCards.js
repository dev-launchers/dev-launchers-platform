import styled from "styled-components";

export const Cards = styled.div`
  width: 321px;
  height: 292px;
  border-radius: 5px;
  background-color: #3c3b3c;
  position: relative;
  margin: 0;
  padding: 0;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
  grid-auto-flow: row;
  row-gap: 62px;
  column-gap: 41px;
  margin: 0;
`;

export const Container = styled.div`
  width: 267px;
  height: 264px;
  margin: 15px auto;
`;
export const Title = styled.h4`
  height: 46px;
  font-size: 24px;
  line-height: 25.31px;
  margin: 0;
`;

export const Subtitle = styled.p`
  height: 26px;
  font-size: 18px;
  line-height: 25.63px;
  margin: 0;
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
