import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme?.colors?.White};
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme?.colors?.NEUTRAL_1};
  text-align: center;
  margin: 0;
  row-gap: 1rem;
`;

export const HeadingText = styled.div`
  width: 50%;
  word-wrap: break-word;
  font-size: 40px;
  font-weight: bold;
  color: ${({ theme }) => theme?.colors?.NEUTRAL_1};
`;

export const HeadingSubText = styled.div`
  width: 75%;
  word-wrap: break-word;
  font-size: 10px;
  color: ${({ theme }) => theme?.colors?.NEUTRAL_1};
`;

export const SelectRolesContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 1.5rem;
`;

export const SelectRoles = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BtnShowRoles = styled.button`
  width: 292px;
  height: 60px;
  padding: 5px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  background-color: #e6e6e6;
  cursor: pointer;
`;

export const RoleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const RoleContainerHead = styled.div``;

export const RoleContainerBody = styled.div`
  width: 100%;
  display: flex;
  gap: 50px;
  justify-content: flex-start;
`;

export const Footer = styled.div`
  width: 100%;
  height: 315px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 35px;
`;

export const BtnSignUp = styled.button`
  background-color: black;
  border-radius: 10px;
  color: white;
  padding: 10px 40px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${({ theme }) => theme?.colors?.BLUE_700};
  text-decoration: none;
`;

export const AreaImage = styled.div`
  width: 90%;
  display: flex;
`;
