import styled from "styled-components";

export const StepperHeader = styled.div`
    width: 71.6%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const StepperBody = styled.div`

`;

export const ProgressBarContainer = styled.div`
    width: 100%;
    height: 1rem;
    display: flex;
    flex-direction: row;
    flex-basis: auto;
    align-items: stretch;
    gap: 8px;
`;

export const Bar = styled.div`
    width: ${props => props.width};
    background-color: #234C73;
`;

export const EmptyBar = styled.div`
    width: ${props => props.width};
    background-color: #BDBDBD;
`;

export const StepperFooter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 8px 14px;
    gap: 22px;
`;