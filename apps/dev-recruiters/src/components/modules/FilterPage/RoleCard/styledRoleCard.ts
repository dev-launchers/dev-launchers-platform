import styled from 'styled-components';

export const CardContainer = styled.div`
width: 250px;
hight: 200px;
background-color: #d9d9d9;
border-radius: 6px;
margin:20px;

&:before{
    content: '';
    display: block;
    width: 100%;
    height: 5px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background-image: linear-gradient( to right, #FF7F0E 25%, #FFAB00 25% 50%, #81C3D7 50% 75%, #3A7CA5 75% 100% );
}
`

export const CardContent = styled.div`
width: 100% ;
hight: 100%;
background-color: #d9d9d9;
border-radius: 6px;
padding:15px;

`

export const Title = styled.h2`

`
export const Category = styled.h4`

`
export const Content = styled.p`
font-size:14px;
font-weigth:200;

`

export const TimeContainer = styled.div`
margin-top:10px
`

export const AboutContainer = styled.div`
margin-top: 12px
`

export const ButtonsContainer = styled.button`
background-color: #000;
color:#fff;
border-radius: 10px;
padding:0.3rem 0.6rem;
display: flex;
justify-content: center;
align-items: center;
font-size: .8rem;
margin-top: 10px;
margin-left:auto;

  a {
    text-decoration: none;
    color: #fff;
  }

`