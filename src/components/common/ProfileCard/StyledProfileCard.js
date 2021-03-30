import styled from "styled-components";

export const Wrapper = styled.div`
  grid-area: ProfileCard;
  background-color: #f0f0f0;
  width: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px 0;
  border: 1px solid black;
  & > div {
    margin-top: 10px;
  }
  @media (orientation: portrait) {
    width: 90%;
  }
`;
export const ProfilePicture = styled.img`
  height: auto;
  border-radius: 50%;

  @media (orientation: portrait) {
    width: 50%;
  }
`;
export const Name = styled.div``;
export const UserName = styled.div`
  color: #9d9d9d;
`;
