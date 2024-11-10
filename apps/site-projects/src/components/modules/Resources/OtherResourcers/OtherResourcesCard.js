import { CardsBtn, OtherResourcersCards, OtherResourcersIcon, OtherResourcersIconInfo } from "./StyledOtherResources"

import Button from "@devlaunchers/components/src/components/atoms/Button";

const OtherResourcersCard = ({resource: {img ,titleButton ,alt , link , moreInfo}}) => {

  return(
    
    <OtherResourcersCards>
      <OtherResourcersIcon src={`/images/projects/resources/logos/${img}`}  />
      <a href={link} target="_blank">
      <Button buttonSize="standard" buttonType="secondary">{titleButton}</Button>
    </a>
    <OtherResourcersIconInfo src={moreInfo} />
    </OtherResourcersCards>
   
   
  )
}


export default OtherResourcersCard
