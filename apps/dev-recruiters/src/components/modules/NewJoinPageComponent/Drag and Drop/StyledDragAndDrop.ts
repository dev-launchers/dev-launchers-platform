import styled from 'styled-components';
export const AllSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 257px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 3px dashed var(--Grey-Scale-grey, #7f7e7f);
  background: var(--Grey-Scale-off-white, #f0edee);
  & h3 {
    color: var(--Grey-Scale-grey, #7f7e7f);

    /* Default/P-D-D */
    font-family: 'Nunito Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`;
export const ChooseFileSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border-radius: 16px;

  flex: 1;
  align-item: center;
  justify-content: center;
  padding: 42px;
  gap: 20px;

  & h3 {
    color: var(--Grey-Scale-grey, #7f7e7f);

    /* Default/P-D-D */
    font-family: 'Nunito Sans';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    
    letter-spacing: normal;
  }
`;

export const AllPageSection = styled.svg`
  display: flex;
  width: 200px;
  height: auto;
  flex-shrink: 0;
  position: relative;
  fill: var(--Grey-Scale-off-white, #f0edee);
  stroke-width: 1.352px;
  stroke: var(--Grey-Scale-charcoal, #474747);
  z-index: 1;
`;
