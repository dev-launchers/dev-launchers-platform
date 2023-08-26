import styled from "styled-components";
import LeftCaretIcon from '../../../images/Onboarding/Stepper/left-caret.svg';
import RightCaretIcon from '../../../images/Onboarding/Stepper/right-caret.svg';

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
		width: 83%;
		margin: auto;
		padding: 2% 2%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 22px;

		button {
			text-transform: unset;
			height: 48px;
			width: 111px;
			img{
				margin-right: 10px;
			}
		}

		.stepper-back-button{
			border: 2px solid #173242;
		}

		.stepper-next-button{
			background-color: #295774;
			color: white;
			img{
				margin-left: 10px;
			}
		}
`;

export const LeftIcon = () => {
	return  <img src={LeftCaretIcon} />;
};

export const RightIcon = () => {
	return <img src={RightCaretIcon} />;
};