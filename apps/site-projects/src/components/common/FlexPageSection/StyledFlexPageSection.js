import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.NEUTRAL_2};

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
export default Wrapper;
