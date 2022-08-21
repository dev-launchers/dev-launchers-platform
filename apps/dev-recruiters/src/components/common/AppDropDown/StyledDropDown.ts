import styled from 'styled-components';

interface DropdownProps {
  isOpen: boolean;
}

export const Wrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: auto;
  //min-width: 200px;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: 'black';
  stroke-width: 2px;
  stroke-linecap: 'round';
  stroke-linejoin: 'round';
`;

export const Toggle = styled.button`
  display: inline-flex;
  box-sizing: border-box;
  background: ${({ theme }) => theme?.colors?.AntiFlashWhite};
  color: ${({ theme }) => theme?.colors?.Black};
  border-radius: 2.9rem;
  padding: 8px 10px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 30.3694px;

  border: none;
  height: 28px;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.p`
  font-family: ${({ theme }) => theme?.fonts?.normal};
  padding: 0;
  margin: 0;
  font-size: 15.1847px;
`;

export const ContentContainer = styled.div<DropdownProps>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  background-color: ${({ theme }) => theme?.colors?.BlackCoral};
  position: absolute;
  z-index: 5;
  padding: 5px;
  margin-top: 7px;
  height: auto;
  width: 100%;
  min-width: 200px;
  color: white;
  border-radius: 7.59234px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  max-height: 40vh;
  overflow-y: auto;
  overflow-x: hidden;
`;
