import styled from "styled-components";

const ProgressBarStyle = styled.div`
background: ${prop => prop.backgroundColor};
width: ${prop => prop.width};
height: ${prop => prop.height};
border-radius: ${prop => prop.borderRadius};
`


export default ProgressBarStyle