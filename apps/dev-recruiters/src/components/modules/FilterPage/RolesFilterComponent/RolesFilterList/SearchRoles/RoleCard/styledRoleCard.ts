import styled from 'styled-components';

export const CardContainer = styled.div`
  max-width: 21.875rem;
  /* max-width: 350px; */
  border-radius: 0.625rem;
  margin-left: 4.5rem;
  margin-top: 2rem;
  @media not all and (min-width: 640px) {
    margin-left: .5rem;
  }
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 0.3125rem;
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
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
  padding: 0.625rem 1.25rem;
  white-space: nowrap;
  margin: 0 0.1875rem;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 0.6875rem;
  text-align: center;
`;

export const CardContent = styled.div`
  width: 100%;
  background-color: white;
  border-bottom-left-radius: 0.625rem;
  border-bottom-right-radius: 0.625rem;
  padding: 1.875rem 1.875rem 1.875rem 1.875rem;
`;

export const Title = styled.h2`
  font-weight: 300;
  font-size: 2rem;
`;

export const TimeCommitment = styled.h4`
  font-weight: 300;
  font-size: 1rem;
`;
export const Time = styled.p`
  font-size: 0.875rem;
  font-weight: 200;
`;

export const AboutDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: 200;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

export const Divider = styled.div`
  width: 50%;
  margin: 0.5rem 0;
  height: 0.09375rem;
  background-color: #5a5a5a;
`;

export const TimeContainer = styled.div`
  margin-top: 0.625rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const AboutContainer = styled.div`
  margin: 2.5rem .25rem;
`;

export const ButtonsContainer = styled.button`
  background-color: #000;
  border-radius: 0.625rem;
  padding: 0.625rem 1.25rem;
  display: flex;
  border: 0.0625rem solid #000;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  margin-top: 0.625rem;
  margin-left: auto;

  text-decoration: none;
  color: white;
  &:hover {
    text-decoration: none;
    cursor: pointer;
    color: ${({ theme }) => theme?.colors?.Argent};
  }
`;
