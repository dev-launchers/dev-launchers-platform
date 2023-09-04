import styled from "styled-components";

export const StyledMeetingTimeCard = styled.a`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border: 1px solid #B9B4B4;
    border-radius: 2rem;
    padding: 2rem 0rem;
    color: ${({theme})=>(theme.colors.GREYSCALE_OFF_BLACK)} !important
`;

export const StyledMeetingTimeCardTitle = styled.h3`
    font-size: ${({theme})=>(theme.fontSizes.medium)};
`;

export const StyledMeetingTimeCardTime = styled.p`
    font-size: 1.5rem;
`;