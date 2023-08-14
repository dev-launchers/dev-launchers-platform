import { CardsBtn, OtherResourcersCards, OtherResourcersIcon, OtherResourcersIconInfo } from "./StyledOtherResources"

const OtherResourcersCard = ({resource: {img ,titleButton ,alt , link , moreInfo}}) => {

  return(
    
    <OtherResourcersCards>
      <OtherResourcersIcon src={`/images/projects/resources/logos/${img}`}  />
      <a href={link} target="_blank">
      <CardsBtn>{titleButton}</CardsBtn>
    </a>
    <OtherResourcersIconInfo src={moreInfo} />
    </OtherResourcersCards>
   
   
  )
}


export default OtherResourcersCard
