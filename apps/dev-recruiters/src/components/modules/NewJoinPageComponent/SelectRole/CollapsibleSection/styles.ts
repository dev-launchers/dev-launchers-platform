import styled from 'styled-components';

export const RoleContainerHead = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  gap: 30px;
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  outline: none;
`;

export const RoleContainerBody = styled.div`
  max-height: ${(props: { show: boolean }) => (props.show ? '1000px' : '0')};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`;
