import { OtherResourcesContainer, TitleResources, OtherResourcersCards, CardsBtn, OtherResourcersIcon, OtherResourcersIconInfo } from "./StyledOtherResources";
import StoryBook from '@/public/images/projects/resources/logos/Vector.png';
import Strapi from '@/public/images/projects/resources/logos/strapi.svg';
import chromatic from '@/public/images/projects/resources/logos/chromatic.svg';
import moreInfo from '@/public/images/projects/resources/logos/moreInfo.svg';




const OtherResources = () => {

  return (
  <OtherResourcesContainer>
  <TitleResources>
  Other Resources

  </TitleResources>

  <OtherResourcersCards>
  <OtherResourcersIcon src={chromatic} alt="chromatic" />
  <a href="https://www.chromatic.com/start" target="_blank">
  <CardsBtn>Chromatic</CardsBtn>
  </a>
  <OtherResourcersIconInfo src={moreInfo} alt="more info" />
  </OtherResourcersCards>
  <OtherResourcersCards>
  <OtherResourcersIcon src={StoryBook} alt="storybook" />
  <a href="https://storybook.js.org/" target="_blank">
  <CardsBtn>StoryBook</CardsBtn>
  </a>
  <OtherResourcersIconInfo src={moreInfo} alt="more info"  />
  </OtherResourcersCards>
  <OtherResourcersCards>
   
  <OtherResourcersIcon src={Strapi} alt="strapi"/>
  <a href="https://github.com/dev-launchers/strapiv4/" target="_blank">
  <CardsBtn>Strapi</CardsBtn>
  </a>
  <OtherResourcersIconInfo src={moreInfo} alt="more info"  />
  </OtherResourcersCards>

 
  </OtherResourcesContainer>
  )

}


export default OtherResources;
