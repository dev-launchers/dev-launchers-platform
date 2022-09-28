import styled from "styled-components";

const CardWrapper = styled.li`
  /* width: 568px; */
  width: 45%;
  max-width: 700px;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 2rem;
  outline: 0.3rem ${({ theme }) => theme.colors.NEUTRAL_1} solid;
  border-radius: 2rem;
  background-color: white;
  overflow: hidden;

  @media (orientation: portrait) {
    width: 98%;
  }
`;

export default CardWrapper;
