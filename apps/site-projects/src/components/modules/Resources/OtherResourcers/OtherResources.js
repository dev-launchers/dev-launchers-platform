import { OtherResourcesContainer, TitleResources, OtherResourcersCards, CardsBtn, OtherResourcersIcon, OtherResourcersIconInfo } from "./StyledOtherResources";
import Vector from '@/public/images/projects/resources/logos/Vector.png';
import AI from '@/public/images/projects/resources/logos/AI.png';
import chromatic from '@/public/images/projects/resources/logos/chromatic.svg';
import moreInfo from '@/public/images/projects/resources/logos/moreInfo.svg';




const OtherResources = () => {

  return (
    <OtherResourcesContainer>
<TitleResources>
  Other Resources

  </TitleResources>

  <OtherResourcersCards>
  <OtherResourcersIcon src={chromatic} alt="Strapi AI" />
  <CardsBtn>Designer System</CardsBtn>
   <OtherResourcersIconInfo src={moreInfo} />
  </OtherResourcersCards>
  <OtherResourcersCards>
    <OtherResourcersIcon src={Vector} alt="Strapi AI" />
  <CardsBtn>Designer System</CardsBtn>
   <OtherResourcersIconInfo src={moreInfo} />
  </OtherResourcersCards>
  <OtherResourcersCards>
   
    <OtherResourcersIcon src={AI} alt="Strapi AI" />
    <CardsBtn>Strapi AI</CardsBtn>
    <OtherResourcersIconInfo src={moreInfo} />
  </OtherResourcersCards>

 
    </OtherResourcesContainer>
  )

}


export default OtherResources;
