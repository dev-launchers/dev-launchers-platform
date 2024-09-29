import styled from "styled-components";

export const TeamContentBlock = styled.div`
  width: 100%;
  h4 {
    margin: 1rem;
  }
`;
export const MembersContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
  flex-wrap: wrap;
  column-gap: 5rem;
  row-gap: 2rem;
  margin-left: 1rem;
  list-style-type: none;
  font-size: 1rem;
`;
export const MemberImage = styled.img`
  width: 8.75rem;
  height: 8.75rem;
  flex-shrink: 0;
`;
