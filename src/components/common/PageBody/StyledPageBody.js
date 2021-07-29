import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  /* border-left: 5vw solid ${({ theme }) => theme.colors.NEUTRAL_2}; */
  /* border-right: 5vw solid ${({ theme }) => theme.colors.NEUTRAL_2}; */
  background-color: ${({ theme }) => theme.colors.NEUTRAL_2};
`;
export default Wrapper;
