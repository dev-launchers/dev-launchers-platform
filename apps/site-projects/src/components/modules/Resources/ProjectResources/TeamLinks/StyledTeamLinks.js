import styled from "styled-components";

export const TeamLinksContainer = styled.div`
    border: 1px solid black;
    border-radius: 1rem;
    padding: 3rem 1rem;
    position: relative;
`;

export const ResourceCardsContainer = styled.ul`
    display:flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin: 0 auto;
    justify-content: center;
`;

export const TeamLinksHeader = styled.h3`
    position: absolute;
    top: 0;
    left: 2rem;
    margin: 0;
    transform: translate(0, -50%);
    background: white;
    padding: .5rem;
`;