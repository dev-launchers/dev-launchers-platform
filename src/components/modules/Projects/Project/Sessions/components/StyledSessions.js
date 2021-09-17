import styled from 'styled-components'
import arrow from './images/arrow.svg'

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.NEUTRAL_2};
  background-color: ${({ theme }) => theme.colors.NEUTRAL_1};
  
  /* Rectangle 926 */
  width: 315px;
  height: 111px;

  background: #494949;
  border-radius: 5px;

  @media (orientation: portrait) {
    span {
      font-size: 1.2rem;
    }
  }
`
export const TitleFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  column-gap: 10%;
  height: 35%;
  margin: 0;
  padding-left: 10px;
`
export const Title = styled.h3`
  height: 30px;
  left: 813px;
  top: 3339px;

  font-family: Abel;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 142.4%;
  /* or 34px */
  color: #FCFCFC;
`

export const SubHeading = styled.h5`
  width: 174px;
  height: 30px;

  font-family: Abel;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 142.4%;
  /* or 31px */
  
  color: #FCFCFC;

  margin: 0;

  position: relative;
  left: 10px;
`

export const Button = styled.button`
  width: 100px;
  height: 29px;

  background: #FCFCFC;
  border-radius: 2px;
  margin: 0;
`
export const ButtonText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 10px;
  padding-left: 10px;

  width: 89px;
  height: 19px;

  font-family: Abel;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;

  color: #353535;
  
  margin: 0;
`

export const Img = styled.img`
  background-image: url(${arrow});
  background-repeat: no-repeat;
  height: 16px;
  width: 16px;
`

export const PercentageProgress = styled.progress`
align-self: flex-end;  
width: 315px;
height: 28px;

font-family: Abel;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 142.4%;
background: #FFAB00;

border-radius: 5px 0px 5px 5px;
margin-top: 15px;


text-align:center;
:before {
  content:attr(data-text);
  position: relative;
  z-index: 2;
}



::-webkit-progress-bar {
  position: relative;
  top: -28px;
  border: 0;
  border-radius: 20px;
  background: #FFAB00;
  background: red;

  border-radius: 5px 0px 5px 5px;

  font-family: Abel;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 142.4%;
  background: #FFAB00;
}
::-webkit-progress-value {
  border: 0;
  background: #FF7F0E;
  border-radius: 0px 0px 0px 5px;

  font-family: Abel;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 142.4%;
/* or 28px */

text-align: center;
}
::-moz-progress-bar {
    border: 0;
    border-radius: 5px 0px 5px 5px;
    background: #FFAB00;
}

`
