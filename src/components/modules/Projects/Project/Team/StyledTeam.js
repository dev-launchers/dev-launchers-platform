import styled from "styled-components";

export const Wrapper = styled.div``;

export const TeamContentBlock = styled.div`
  width: 100%;
  h4,
  p {
    margin: 0;
  }
`;
export const MembersContainer = styled.ul`
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
  flex-wrap: wrap;
  list-style-type: none;
  font-size: 13px;
  color: #008080;
  & p {
    padding: 0;
    margin: 0;
  }
  & li {
    margin-top: 0.5rem;
    max-width: 300px;
    :nth-child(2) {
      font-weight: bold;
      font-size: 16px;
    }
    :first-child {
      flex-shrink: 0;
    }
  }
`;
export const MemberImage = styled.img`
  border-radius: 50%;
  width: 20%;
  height: 20%;
  flex-shrink: 0;
  float: left;
  &:hover {
    opacity: 0.5;
  }
`;
