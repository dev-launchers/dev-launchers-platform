import styled from "styled-components";

export const CheckboxContainer = styled.div`
    display: flex;
    label{
        z-index:0 !important;
        font-size: 16px;
        &:hover {
            &::after {
                ${'' /* box-shadow: none; */}
            }
        }
    }

    p {
        margin: 0;
    }
`