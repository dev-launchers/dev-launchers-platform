import styled from 'styled-components';

export const PageFiveContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 0 108px;
  gap: 44px;
`;

export const Header = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  p,
  h2,
  h3 {
    margin-bottom: 0;
    margin-top: 8px;
  }
  .margin-0 {
    margin: 0;
  }

  .modal-subtitle {
    color: #1c1c1c;
  }
`;

export const UserInterestsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 24px;
  height: 308px;
  overflow: scroll;
`;

export const Bubble = styled.div`
  background-color: white;
  padding: 10px 30px;
  color: #295774;
  border: 2px solid #295774;
  border-radius: 24px;
  font-family: Nunito Sans;
  font-size: 16px;
  cursor: pointer;
  &.selected {
    background-color: #295774;
    color: white;
  }
`;
