import styled from "styled-components";

export const StatSection = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
column-gap: 64px;
`;

export const StatsBox = styled.div`
min-width: 190px;
height: 180px;
position: relative;
display: flex;
flex-direction: column;
margin-top: 32px;
background: #FFFFFF;
box-shadow: 0px 4px 6px 3px rgba(51, 51, 51, 0.1);
`;

export const StatsTitle = styled.div`
margin-top: 25px;
margin-left: 30px;
padding-right: 30px;
text-align: left;
font-family: 'Nunito Sans';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 28px;
color: #1C1C1C;
`;

export const StatsCount = styled.div`
margin-top: 31px;
margin-left: 27px;
text-align: left;
font-family: 'Nunito Sans';
font-style: normal;
font-weight: 700;
font-size: 64px;
line-height: 68px;
letter-spacing: -0.02em;
color: #000000;
`;