import styled from "styled-components";

const FormFieldMargin = styled.div`
margin-bottom: ${props => props.mb ? "0.7rem" : "1.2rem"};
`;

export const ConfirmationSection = styled.div`
display: flex;
align-items: center;

div {
    font-size: large;
}

.red {
    color: red;
}
`
export const CheckboxSpacing = styled.div`
margin-right: 0.7rem;
`

export default FormFieldMargin;