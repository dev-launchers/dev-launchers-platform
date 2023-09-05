import styled from "styled-components";

export const TeamResourcesContainer = styled.fieldset`
    display: flex;
    gap: 2rem;
    background: white;
    border: 1px solid #B9B4B4 ;
    /* border-radius: 1rem; */
    padding: 2rem 3rem;
    margin: 1.5rem 0;
    padding-bottom: 2rem;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;

    > legend {
        font-family: ${({theme})=>(theme.fonts.headline)};
        font-size: 2.3rem;
        font-weight: bold;
        padding: 0 1.5rem;
    }
`