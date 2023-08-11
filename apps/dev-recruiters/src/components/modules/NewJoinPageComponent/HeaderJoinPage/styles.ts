import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  row-gap: 1rem;
  margin-top: 100px;
`;

export const BaseText = styled.div`
  word-wrap: break-word;
  color: ${({ theme }) => theme?.colors?.NEUTRAL_1};
`;

export const HeaderText = styled(BaseText)`
  width: 50%;
  font-size: 44px;
  font-family: 'Abel', sans-serif;
`;

export const SubHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  row-gap: 0.5rem;
  height: 100px;
`;

export const SubHeaderText = styled(BaseText)`
  width: 75%;
  font-size: 16px;
  font-family: 'Nunito Sans', sans-serif;
`;
