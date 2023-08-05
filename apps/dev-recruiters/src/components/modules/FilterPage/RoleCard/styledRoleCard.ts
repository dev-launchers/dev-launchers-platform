import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 250px;
  background-color: #d9d9d9;
  border-radius: 6px;
  margin: 20px;

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 5px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background-image: linear-gradient(
      to right,
      #ff7f0e 25%,
      #ffab00 25% 50%,
      #81c3d7 50% 75%,
      #3a7ca5 75% 100%
    );
  }
`;

export const CardContent = styled.div`
  width: 100%;
  background-color: #d9d9d9;
  border-radius: 6px;
  padding: 15px;
`;

export const Title = styled.h2`
  font-weight: 300;
  margin-bottom: 10px;
`;

export const Category = styled.h4`
  font-weight: 300;
`;
export const Content = styled.p`
  font-size: 12px;
  font-weight: 200;
`;

export const TimeContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AboutContainer = styled.div`
  margin-top: 12px;
`;

export const ButtonsContainer = styled.button`
  background-color: #000;
  color: #fff;
  border-radius: 10px;
  padding: 0.3rem 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  margin-top: 10px;
  margin-left: auto;

  a {
    text-decoration: none;
    color: #fff;
  }
`;
