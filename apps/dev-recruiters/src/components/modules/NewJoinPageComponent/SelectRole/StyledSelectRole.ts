import styled from 'styled-components';

export const SelectRoleContainer = styled.div`
  width: 23rem;
  height: 17rem;
  border: .5rem solid #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border-radius: 1rem;
  margin: 0 1.25rem;
  box-shadow: 0 .6rem 1.2rem .6rem #7f7e7f25;
  padding: 1.5rem;
  cursor: pointer;
  @media not all and (min-width: 640px) {
    /* height: 100vh; */
    max-height: 24rem;
  }

  &:hover {
    background-color: #ff7f0e;
  }
`;

export const SelectRoleContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 10rem;
`;

export const AreaIconImage = styled.div`
  margin: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconImage = styled.img`
  margin: 5%;
  width: 100%;
  display: inline;
`;

export const TextRole = styled.div`
  font-size: 2.5rem;
  font-family: 'Abel', sans-serif;
`;

export const SelectRoleContainerBottom = styled.div`
  height: 1.8rem;
`;

export const TextRoleSituation = styled.div`
  font-size: 1rem;
  font-family: 'Nunito Sans', sans-serif;
`;
