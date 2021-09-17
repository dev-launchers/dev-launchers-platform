import styled from 'styled-components'

export const Wrapper = styled.div`
  align-self: center;
  padding-top: 2rem;
  color: ${({ theme }) => theme.colors.NEUTRAL_2};
  background-color: ${({ theme }) => theme.colors.NEUTRAL_1};
  background: #3C3B3C;
  


  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 34px;
  row-gap: 55px;
  max-width: 1025px;

  padding-top: 57px;
  padding-right: 0px; 
  padding-bottom: 56px; 
  padding-left: 30px; 

  box-sizing: border-box;
  @media (orientation: portrait) {
    span {
      font-size: 1.2rem;
      padding-left: 10px;
    }
  }
`
export const FlexBoxTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  row-gap: 20px;
`
export const FlexBoxVerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 55px;
  margin: 0px;
  position: relative;
  top: -10px;
  justify-self: right;
`
export const Descript = styled.div`
  /* Times week */

  max-width: 312px;

  font-family: Abel;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 142.4%;
  /* or 31px */

  display: flex;
  align-items: center;

  color: #FCFCFC;
  margin: 0;
`

export const Title = styled.div`
  max-width: 312;

  font-family: Abel;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 105.44%;
  /* or 34px */

  display: flex;
  align-items: center;

  color: #FCFCFC;
  margin: 0;

`
