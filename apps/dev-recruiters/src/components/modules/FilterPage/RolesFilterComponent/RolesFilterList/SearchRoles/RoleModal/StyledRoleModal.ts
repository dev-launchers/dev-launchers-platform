import styled from 'styled-components';

export const Icon = styled.svg<{ Active: boolean }>`
  color: ${(props) =>
    props.Active ? props.theme?.colors?.White : props.theme?.colors?.Crayola};
  stroke: ${(props) => props.theme?.colors?.White};
  height: 2rem;
  width: 2rem;
`;
export const ActionsContainer = styled.div<{
  Mobile: boolean;
  expanded?: boolean;
}>``;
export const ButtonsSection = styled.div<{
  Mobile: boolean;
  expanded?: boolean;
}>`
  display: ${(props) => (props.Mobile ? 'none' : 'flex')};

  margin: 32px 0px;
  align-items: center;
  justify-content: flex-end;
  gap: 32px;

  @media (max-width: 640px) {
    // display: ${(props) => (props.Mobile ? 'flex' : 'none')};
    display: flex;
    margin: 32px auto;
    justify-content: end;
  }
  @media (max-width: 506px) {
    // display: ${(props) => (props.Mobile ? 'flex' : 'none')};
    display: flex;
    flex-direction: column;
    margin: 32px auto;
  }
`;
export const ApplyButton = styled.a<{ color?: string }>`
  font-family: ${(props) => props.theme?.fonts?.normal};
  // background-color: ${(props) => props.theme?.colors?.BLUE_700};
  background-color: #69349d;
  color: ${(props) => props.theme?.colors?.White};
  border-radius: 0.4rem;
  position: relative;
  bottom: 0;
  right: 0;
  padding: 14px 24px;
  white-space: nowrap;
  border: none;
  // margin: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 11px;
  text-align: center;
  &:hover {
    text-decoration: none;
    cursor: pointer;
    color: ${({ theme }) => theme?.colors?.Argent};
  }
`;
export const SaveForLaterButton = styled.button<{ color?: string }>`
  font-family: ${(props) => props.theme?.fonts?.normal};
  // background-color: ${(props) => props.theme?.colors?.BLUE_700};

  color: ${(props) => props.theme?.colors?.BrandAltNebula600};
  border-radius: 0.4rem;
  position: relative;
  bottom: 0;
  right: 0;
  padding: 14px 24px;
  white-space: nowrap;
  border: 2px solid #69349d;
  // margin: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 11px;
  text-align: center;
  &:hover {
    text-decoration: none;
    cursor: pointer;
    color: ${({ theme }) => theme?.colors?.BrandAltNebula600};
  }
`;

export const CommitmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModalDescriptionSection = styled.div<{
  Mobile: boolean;
}>`
  display: ${(props) => (props.Mobile ? 'none' : 'block')};
  height: 100%;
  padding: 0px 20px 0px 50px;

  & h3 {
    font-family: ${(props) => props.theme?.fonts?.normal};
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
  }

  & p {
    font-family: ${(props) => props.theme?.fonts?.normal};
    font-style: normal;
    font-size: 14px;
    line-height: 19px;
    line-height: 1.125rem;
    max-width: 28rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-wrap;
  }

  @media (max-width: 760px) {
    padding: 0 1rem;
    display: ${(props) => (props.Mobile ? 'block' : 'none')};
    & p {
      padding: 0 1rem;
      font-family: ${(props) => props.theme?.fonts?.normal};
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.125rem;
    }
  }
`;

export const ModalProjectSection = styled.div`
  height: 100%;
  font-family: ${(props) => props.theme?.fonts?.normal};
  font-style: normal;

  line-height: 22px;
  max-width: 200px;

  & h5 {
    font-family: ${(props) => props.theme?.fonts?.normal};
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
  }

  & p {
    font-family: ${(props) => props.theme?.fonts?.normal};
    font-style: normal;
    font-size: 14px;
    line-height: 24px;
    line-height: 1.125rem;
    font-weight: 400;
    // max-width: 28rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-wrap;
  }
`;

export const BulletListItem = styled.li`
  font-size: 12px;
`;

export const BulletList = styled.div`
  padding-right: 0 0 0px 50px;
  max-width: 200px;
`;

export const CloseButton = styled.button`
  background: ${({ theme }) => theme.colors.White};
  border: none;
  border-radius: 5px;
  height: 32px;
  width: 32px;
  // margin: 20px;
  // position: absolute;
  // top: 0;
  // right: 0;

  // box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
`;

export const CloseIcon = styled.svg`
  color: ${({ theme }) => theme?.colors?.Black};
  height: 100%;
  width: 100%;
`;

export const ColorBox = styled.div`
  width: 100%;
  height: 6.233px;
  position: absolute;
  border: none;
  top: 0;
  right: 0;
  background: linear-gradient(
    to right,
    #ff7f0e 25%,
    #ffab00 25% 50%,
    #81c3d7 50% 75%,
    #3a7ca5 75% 100%
  );
`;

export const ColorRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 10px 0;
`;

/***NEW JOIN STYLE IMPROVEMENT */

export const RoleDetailsModalWrapper = styled.div``;

export const CloseColorBoxContainer = styled.div`
  display: flex;
  gap: 32px;

  align-items: center;
`;
