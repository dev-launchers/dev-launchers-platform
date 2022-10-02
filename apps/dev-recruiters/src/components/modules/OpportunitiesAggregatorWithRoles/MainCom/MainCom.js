import React from "react";
import ShortCard from "../ShortCard";
import LongCard from "../LongCard";
import {featuredCardData} from './data';
import { descriptionCardData } from "./data";
import {ProjectContainer} from "../MainCom/StyledMainCom"

 const Main = ()=>{
   return (
        <>
          {/* <h1>Join Us!</h1> */}
          <ProjectContainer>
          {featuredCardData.map((cardData)=>{
            return (
                   <>
                    <ShortCard cardData = {cardData} />
                    <ShortCard cardData = {cardData} />
                    <ShortCard cardData = {cardData} />
                    </>
                    )
          }
          )}
          
     </ProjectContainer>
     {descriptionCardData.map((longCard)=>{
       return (
        <LongCard longCard = {longCard}/> 
       )
     })}
   <br />
        </>
   )       
            
}

export default Main;
