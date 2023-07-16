import styled from "styled-components";

const OnboardingFormSection = styled.section`
	position: relative;
	padding: 2rem;
	margin-bottom: 2rem;
	background-color: ${({ theme }) => theme.colors.White};
	.separator {
			height: 2rem;
	}
	.continue-btn {
			float: right;
	}
	.form-title-mb {
			margin-bottom: 2.5rem;
	}
`;

export const StepperContainer = styled.div`
	height: 152px;
`;
export default OnboardingFormSection;