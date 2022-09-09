import styled from "styled-components";



export const FilterMenu = styled.div<{ visible: boolean }>`
  font-family: ${({ theme }) => theme?.fonts?.normal};
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(${(props) => (props.visible ? '0' : '-100%')});
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme?.colors?.White};
  background: ${({ theme }) => theme?.colors?.Black};
  z-index: 10;
  transition: all 300ms ease-in-out;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.SonicSilver};

  & p {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 29px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.NEUTRAL_2};
    padding: 0;
    margin: 0;
  }
`;

export const ResetButton = styled.button`
  font-family: ${({ theme }) => theme?.fonts?.normal};
  font-size: 16px;
  background: transparent;
  color: ${({ theme }) => theme?.colors?.LightGray};
  border: none;
`;

export const CloseButton = styled.button`
  background: ${({ theme }) => theme.colors.Gray};
  border: none;
  border-radius: 10px;
  height: 40px;
  width: 40px;
`;

export const CloseIcon = styled.svg`
  color: ${({ theme }) => theme?.colors?.White};
  height: 100%;
  width: 100%;
`;

export const Section = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.SonicSilver};
`;

export const SectionTitle = styled.p`
  font-family: ${({ theme }) => theme?.fonts?.normal};
  font-style: normal;
  font-weight: 700;
  font-size: 21.2644px;
  line-height: 29px;
  text-transform: capitalize;
  margin: 0;
  padding: 0;
  margin-bottom: 15px;
  white-space: nowrap;
`;

export const FilterButton = styled.button`
  width: 90%;
  background: ${({ theme }) => theme?.colors?.White};
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin: 10px auto;
  margin-top: auto;

  font-family: ${({ theme }) => theme?.fonts?.normal};
  font-style: normal;
  font-weight: 700;
  font-size: 21.2644px;
  line-height: 29px;
  text-transform: capitalize;
`;
