import styled from 'styled-components';
export const ChooseFiles = styled.input`
  display: flex;
  width: 155px;
  height: 40px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border-radius: 8px;
  background: #fff;

  /* Shadow/shadow-500 */
  box-shadow: 0px 10px 18px 10px rgba(127, 126, 127, 0.25);
`;
export const AllSection = styled.div`
  display: flex;
  flex-direction: row;
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
  justify-content: space-between;
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

export const AllPageSection = styled.svg`
  display: flex;
  width: 250px;
  height: 209.2px;
  flex-shrink: 0;
  position: relative;
  fill: var(--Grey-Scale-off-white, #f0edee);
  stroke-width: 1.352px;
  stroke: var(--Grey-Scale-charcoal, #474747);
  z-index: 1;
`;
