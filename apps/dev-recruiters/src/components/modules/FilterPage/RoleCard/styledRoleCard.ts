import styled from 'styled-components';

export const CardContainer = styled.div`
  max-width: 350px;
  background-color: #d9d9d9;
  border-radius: 10px;
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

export const Button = styled.button<{ color?: string }>`
  font-family: ${(props) => props.theme?.fonts?.normal};
  background-color: ${(props) =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme?.colors?.OuterSpace};
  color: ${(props) => props.theme?.colors?.White};
  border-radius: 1.8rem;
  padding: 10px 20px;
  white-space: nowrap;
  margin: 0 3px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 11px;
  text-align: center;
`;

export const CardContent = styled.div`
  width: 100%;
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 30px 30px 30px 30px;
`;

export const Title = styled.h2`
  font-weight: 300;
  font-size: 32px;
`;

export const TimeCommitment = styled.h4`
  font-weight: 300;
  font-size: 16px;
`;
export const Time = styled.p`
  font-size: 14px;
  font-weight: 200;
`;

export const AboutDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
  font-weight: 200;
`;

export const Divider = styled.div`
  width: 50%;
  margin: 8px 0px;
  height: 1.5px;
  background-color: #5a5a5a;
`;

export const TimeContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AboutContainer = styled.div`
  margin: 40px 20px;
`;

export const ButtonsContainer = styled.button`
  background-color: #000;
  border-radius: 10px;
  padding: 10px 20px;
  display: flex;
  border: 1px solid #000;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  margin-top: 10px;
  margin-left: auto;

  text-decoration: none;
  color: white;
  &:hover {
    text-decoration: none;
    cursor: pointer;
    color: ${({ theme }) => theme?.colors?.Argent};
  }
`;
