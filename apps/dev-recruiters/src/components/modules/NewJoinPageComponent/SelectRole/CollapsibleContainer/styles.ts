import styled from 'styled-components';

export const RoleContainerBody = styled.div<{
  Mobile: boolean;
}>`
  width: 100%;
  display: flex;
  gap: 32px;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: ${(props) => (props.Mobile ? '0' : '36px')}; 
  margin-bottom: 50px;
`;

export const RoleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
