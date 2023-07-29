import styled from 'styled-components';

export const SelectRoleContainer = styled.div`
  width: 360px;
  height: 266px;
  border: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border-radius: 16px;
  margin: 0 20px;
  box-shadow: 0 10px 18px 10px #7f7e7f40;
  padding: 20px 0;
  cursor: pointer;

  &:hover {
    background-color: #ff7f0e;
  }
`;

export const SelectRoleContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 150px;
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

export const TextRole = styled.text`
  font-size: 35px;
  font-weight: bold;
`;

export const SelectRoleContainerBottom = styled.div`
  height: 30px;
`;

export const TextRoleSituation = styled.text``;
