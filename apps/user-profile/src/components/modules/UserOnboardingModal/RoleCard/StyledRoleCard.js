import styled from "styled-components";
import React from "react";
import Developer from "../../../.././images/RoleCard/developer.svg";
import UX from "../../../.././images/RoleCard/ux-ui.svg";
import Other from "../../../.././images/RoleCard/other.svg";


export const IconImg = ({iconImg}) => {
    switch (iconImg) {
        case 'Developer':
            return (
                <img src={Developer}/>
            )

        case 'UX':
            return (
                <img src={UX}/>
            )

        case 'Other':
            return (
                <img src={Other}/>
            )
      }
} ;

export const RoleCardContainer = styled.div`
    margin: 50px 10px 0px;
    /* Components */
    box-sizing: border-box;
    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5%;
    gap: 10px;
    width: 220px;
    height: 250px;
    border: 1px solid #7F7E7F;    
    border-radius: 10px;

    &.selected {
        border: 5px solid #3A7CA5;
    }
`;

export const IconWrapper = styled.div`
    width: 100%;

    img {
        width: 50px;
        height: 50px;
    };
`;


export const TextWrapper = styled.div`
    text-align: center;
    width: 100%;

    .title {
        font-weight: 900;

        &.theme1 {
        color: #295774;
        }

        &.theme2 {
            color: #3A7CA5;
        }

        &.theme3 {
            color: #FF7F0E;
        }
    };
`;



