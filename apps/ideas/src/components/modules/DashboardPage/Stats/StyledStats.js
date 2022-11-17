import styled from "styled-components";

export const StatsBox = styled.div`
/* width: 568px; */
width: 100%;
position: relative;
display: flex;
flex-direction: column;
margin-top: 2vw;
margin-right: 4vw;
background-color: ${({ theme }) => theme.colors.NEUTRAL_2};
overflow: hidden;
padding-bottom: calc(1vw + 5px);
`;

export const StatsTitle = styled.div`
margin-top: 2vw;
margin-left: 2vw;
text-align: left;
font-family: 'Nunito Sans';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 28px;
color: #1C1C1C;
`;

export const StatsCount = styled.div`
margin-top: 2vw;
margin-left: calc(2vw + 5px);
text-align: left;
font-family: 'Nunito Sans';
font-style: normal;
font-weight: 700;
font-size: 64px;
line-height: 68px;
letter-spacing: -0.02em;
color: #000000;
`;