import styled from 'styled-components';

export const Icon = styled.svg<{ Active: boolean }>`
  color: ${(props) =>
    props.Active ? props.theme?.colors?.White : props.theme?.colors?.Crayola};
  stroke: ${(props) => props.theme?.colors?.White};
  height: 2rem;
  width: 2rem;
`;

export const ButtonsSection = styled.div<{
  Mobile: boolean;
  expanded?: boolean;
}>`
  display: ${(props) => (props.Mobile ? 'none' : 'flex')};

  padding: 0.875rem 1.5rem;
  align-items: center;

  @media (max-width: 760px) {
    display: ${(props) => (props.Mobile ? 'flex' : 'block')};
    margin: auto auto;
    justify-content: space-evenly;
  }
`;
export const ApplyButton = styled.a<{ color?: string }>`
  font-family: ${(props) => props.theme?.fonts?.normal};
  background-color: ${(props) => props.theme?.colors?.BLUE_700};
  color: ${(props) => props.theme?.colors?.White};
  border-radius: 0.4rem;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.875rem 1.5rem;
  white-space: nowrap;
  border: none;
  margin: 1.25rem;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 0.6875rem;
  text-align: center;
  &:hover {
    text-decoration: none;
    cursor: pointer;
    color: ${({ theme }) => theme?.colors?.Argent};
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
  @media not all and (min-width: 640px) {
    display: grid;
  }
`;

export const ModalDescriptionSection = styled.div<{
  Mobile: boolean;
}>`
  display: ${(props) => (props.Mobile ? 'none' : 'block')};
  height: 100%;
  padding: 0 1.25rem 0 3.125rem;

  & h3 {
    font-family: ${(props) => props.theme?.fonts?.normal};
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.375rem;
  }

  & p {
    font-family: ${(props) => props.theme?.fonts?.normal};
    font-style: normal;
    font-size: 0.875rem;
    line-height: 1.1875rem;
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
  font-weight: 700;
  line-height: 1.375rem;
  max-width: 12.5rem;

  & h4 {
    font-family: ${(props) => props.theme?.fonts?.normal};
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.375rem;
  }

  & p {
    font-family: ${(props) => props.theme?.fonts?.normal};
    font-style: normal;
    font-size: 0.875rem;
    line-height: 1.1875rem;
    line-height: 1.125rem;
    max-width: 28rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-wrap;
  }
`;

export const BulletListItem = styled.li`
  font-size: 0.75rem;
  padding: 0.2rem 0;
  margin-left: 0.2rem;
`;

export const BulletList = styled.div`
  padding: 0 0 0 3.125rem;
  max-width: 12.5rem;
`;

export const CloseButton = styled.button`
  background: ${({ theme }) => theme.colors.White};
  border: none;
  border-radius: 0.3125rem;
  height: 1.375rem;
  width: 1.25rem;
  margin: 1.25rem;
  position: absolute;
  top: 0;
  right: 0;

  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
`;

export const CloseIcon = styled.svg`
  color: ${({ theme }) => theme?.colors?.Black};
  height: 100%;
  width: 100%;
`;

export const ColorBox = styled.div`
  width: 100%;
  height: 0.625rem;
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
  margin: 0 0 0.625rem 0;
`;

export const Divider = styled.div`
  width: 50%;
  margin: 0.5rem 0;
  height: 0.09375rem;
  background-color: #5a5a5a;
`;