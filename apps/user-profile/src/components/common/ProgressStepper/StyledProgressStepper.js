import styled from "styled-components";
import theme from "../../../../../../apps/app/styles/theme.ts"

export const StyledStepperContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledStepperBody = styled.div`
    padding: 50px 16px;
`;

export const StyledStepperHeaderItem = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    .step-counter {
        position: relative;
        z-index: 5;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        padding: 5px;
        border-radius: 50%;
        background: ${theme.colors.GREYSCALE_WHITE};
        margin-bottom: 6px;
    }

    &::after {
        position: absolute;
        content: '';
        border-bottom: 2px solid ${theme.colors.GREYSCALE_WHITE};
        width: 100%;
        top: 20px;
        left: 50%;
        z-index: 2;
    }

    &.completed {
        .step-counter {
            background-color: ${theme.colors.ORANGE_100};
        }
        &::before {
            position: absolute;
            content: '';
            border-bottom: 2px solid ${theme.colors.ORANGE_100};
            width: 100%;
            top: 17px;
            left: -50%;
            z-index: 3;
        }
    }

    &:first-child {
        &::before {
            content: none;
        }
    }

    &:last-child {
        &::after {
            content: none;
        }
    }

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export const StyledStepperHeader = styled.div`
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;
