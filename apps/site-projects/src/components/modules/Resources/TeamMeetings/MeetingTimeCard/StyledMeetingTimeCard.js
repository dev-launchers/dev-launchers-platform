import styled from "styled-components";

export const StyledMeetingTimeCard = styled.a`
    width: 100%;
    max-width: 18rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #B9B4B4;
    border-radius: 2rem;
    padding: 2rem 1rem;
    color: ${({theme})=>(theme.colors.GREYSCALE_OFF_BLACK)} !important;
    text-align: center;

    &:hover{
        h3{
            color: ${({theme})=>(theme.colors.BLUE)};
        }
    }

    img{
        width: 4rem;

        @media(min-width:37.5rem){
            width: 5rem;
        }
    }
`;

export const StyledMeetingTimeCardTitle = styled.h3`
    font-size: 1.8rem;
`;

export const StyledMeetingTimeCardTime = styled.p`
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 1.6rem;
    margin-top: 0.5rem;
`;