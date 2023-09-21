import styled from 'styled-components';

export const RoleContainerHead = styled.div`
  display: flex;
  justify-content:${(props: { show: boolean }) => (props.show ? 'flex-start' : 'center')} ;
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
max-height: ${(props: { show: boolean }) => (props.show ? '100%' : '0')};
width: 100%;
overflow: hidden;
transition: max-height 0.5s ease-in-out;
margin: 0 0 ${(props: { show: boolean }) => (!props.show ? '20px' : '0')} 0px;
`;

export const Title = styled.div`
  color: #1e1e1e;
  font-family: 'Abel', sans-serif;
  font-size: 32px;
`;
