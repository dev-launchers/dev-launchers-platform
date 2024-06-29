import styled from "styled-components";

export const Wrapper = styled.div`
  grid-area: ProfileCard;
  width: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 40px;
  padding: 50px 0;
  & > div {
    margin-top: 10px;
  }
  p {
    font-size: 1.4rem;
  }
  @media (orientation: portrait) {
    width: 90%;
  }
`;
export const ProfilePicture = styled.img`
  border-radius: 50%;
  @media (orientation: portrait) {
    width: 128px;
    height: 128px;
  }
`;
export const Name = styled.div``;
export const UserName = styled.div`
  color: #9d9d9d;
`;
