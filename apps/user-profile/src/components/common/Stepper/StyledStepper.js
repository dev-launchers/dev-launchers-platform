import styled from "styled-components";

export const StepperContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;    
    border-radius: 32px;
`;

export const StepperHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    background: black;
    padding: 30px 108px 54px; 

    .completed-step, .active-step {
        background-color: orange;
    }
    .uncompleted-step {
        background-color: white;
    }
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
    bottom: -24px;
    width: max-content;
`

export const StepperBody = styled.div`
    height: 564px;
`;

export const ProgressBarContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    align-items: center;
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
    padding: 8px 14px;
    padding: 0 108px 54px;
    gap: 22px;

    .stepper-btn-icon-text{
        display: flex;
        align-items:center;
        justify-content: space-between;
        gap: 10px;
    }
`;