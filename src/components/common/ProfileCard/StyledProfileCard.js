import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #f0f0f0;
  width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  margin: 20px;
  border: 1px solid black;
  & > div {
    margin-top: 10px;
  }

  @media (orientation: portrait) {
    width: 60%;
    margin: 10px auto 10px auto;
  }
`;
export const ProfilePicture = styled.img`
  height: auto;
  border-radius: 50%;

  @media (orientation: portrait) {
    width: 50%;
  }
`;
export const Name = styled.div`
  text-align: center;
`;
export const UserName = styled.div`
  text-align: center;
  color: #9d9d9d;
`;
