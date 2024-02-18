import styled from "styled-components";

export const StepperContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 32px;
    .close-button {
        color: white;
        cursor: pointer;
    }
`;

export const StepperHeader = styled.div`
    display: flex;
    flex-direction: row;
    background: black;
    max-height: 120px;
    justify-content: center;
    border: 10px red;
    padding: 40px 108px 54px; 
    .completed-step, .active-step {
        background-color: orange;
    }
    .uncompleted-step {
        background-color: white;
    }

`;

export const CloseIcon = styled.div` 
    position: absolute; 
    top: 20px; right: 20px;


    `;

export const StepNumber = styled.div`
    position: relative;
    font-size: 20px;
    color: black;
    width: 32px;
    height: 32px;
    background-color: orange;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
`;

export const StepName = styled.div`
    color: white;
    position: absolute;
    font-size: 14px;
    bottom: -30px;
    width: max-content;
`

export const StepperBody = styled.div`
    height: 100%;
    ${'' /* max-height: 564px; */}
    max-height: 666px;
`;

export const ProgressBarContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    align-items: center;
    max-width: 423px;
`;

export const Bar = styled.div`
    width: ${props => props.width};
    height: 4px;
    margin-left: ${props => props.spacing.addSpaceToLeft ? '2px' : 0};
    margin-right: ${props => props.spacing.addSpaceToRight ? '2px' : 0};
`;

export const StepperFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 60px 108px 54px;
    gap: 22px;
    .stepper-btn-icon-text{
        display: flex;
        align-items:center;
        justify-content: space-between;
        gap: 10px;
    }
`;