import styled from "styled-components";

export const StyledTeamMeetingsContainer = styled.fieldset`
    display: flex;
    gap: 2rem;
    background: white;
    border: 1px solid #B9B4B4 ;
    border-radius: .2rem;
    padding: 2rem 1rem;
    margin: 1.5rem 0;
    padding-bottom: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    @media (min-width:40rem){
        padding: 4rem 3rem;
    }

    > legend {
        font-family: "Abel",sans-serif;
        font-size: 2.3rem;
        font-weight: bold;
        padding: 0 1.5rem;
    }
`