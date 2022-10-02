import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fonts.normal}, sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BrightGray};
  padding: 0 12px;
  border-radius: 1.25rem;
  height: 32.78px;
  width: 15.4688rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 760px) {
    height: 40px;
    width: 100%;
    margin: auto auto;
    border-radius: 10px;
    box-shadow: 0px 1.33333px 1.33333px rgba(0, 0, 0, 0.25);
  }
`;

export const Icon = styled.svg`
  height: 23px;
  width: 23px;
  margin-right: 8px;
`;

export const SearchField = styled.input`
  box-sizing: border-box;
  width: 100%;
  background-color: transparent;
  border: none;
  font-family: ${({ theme }) => theme.fonts.normal};
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: 0.216667px;
  color: ${({ theme }) => theme.colors.OuterSpace};

  &:focus-visible {
    outline: none;
  }
`;
