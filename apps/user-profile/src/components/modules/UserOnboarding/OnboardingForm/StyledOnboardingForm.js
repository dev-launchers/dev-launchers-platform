import styled from "styled-components";

const OnboardingFormSection = styled.section`
    position: relative;
    padding: 2rem;
    margin: 2rem 0;
    background-color: ${({ theme }) => theme.colors.White};
    .separator {
        height: 2rem;
    }
    .continue-btn {
        position: center;
        bottom: 0;
        right: 4rem;
    }
    .form-title-mb {
        margin-bottom: 2.5rem;
    }
`;
export default OnboardingFormSection;