import styled from "styled-components";

export const Container = styled.div`
  max-width: 435px;
  min-height: 272.375px;
  margin: 0.5% auto;
  border-radius: 35px 35px 30px 30px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: ${({ theme }) => theme.colors.NEUTRAL_4};
`;

export const CardHeader = styled.div`
  font-family: ${({ theme }) => theme?.fonts?.normal};
  font-size: 27px;
  text-align: left;
  padding: 1rem 2.5625rem 1rem 2.5625rem;
  border-radius: 30px;
  background-color: ${({ theme }) => theme?.colors?.Crayola};
  color: ${({ theme }) => theme?.colors?.White};
  /* font-weight: 400; */
`;

export const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.NEUTRAL_4};
  color: ${({ theme }) => theme?.colors?.Black};
  text-align: center;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  padding: 0.8125rem 1.0625rem 0.6875rem 2.5625rem;
  font-size: 19.2px;
`;
export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.headline};
  line-height: 2.125rem;
`;

export const Description = styled.div`
  font-size: 16px;
  padding-top: 0.5rem;
`;

export const Category = styled.div`
  font-size: 16px;
  font-weight: 700;
`;
export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  font-size: 13px;
`;

export const Content = styled.div`
  font-size: 14px;
`;

export const PositionContent = styled.li`
  display: flex;
  gap: 0.5rem;
  margin-left: 0.5rem;

  list-style: none;
  ::before {
    content: "•";
  }
`;

export const Input = styled.a`
  cursor: pointer;
  padding: 0.3rem 0.5rem;
  border-radius: 30px;
  background-color: ${({ theme }) => theme?.colors?.DarkElectricBlue};
  color: ${({ theme }) => theme?.colors?.White};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  font-size: 13px;
`;
