import styled from "styled-components";

export const YourProjectsContainer = styled.div`
    padding-top: 2rem;

    > ul {
        padding-left: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
    }
`

export const InnerProjectContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border: ${({ projectid, selectedcardid }) => selectedcardid === projectid ? '6px solid #3A7CA5' : 'none'};

    > button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        outline: none;
        z-index: 999;
        cursor: pointer;
    }
`