import { OtherResourcesContainer, TitleResources } from "./StyledOtherResources";
import moreInfo from '@/public/images/projects/resources/logos/moreInfo.svg';
import OtherResourcersCard from "./OtherResourcesCard";


const OtherResources = () => {

  return (
  <OtherResourcesContainer>
  <TitleResources>
   Other Resources

  </TitleResources>

 
  {OtherResourcersData.map((resource, i) => (
  <OtherResourcersCard key={i} resource={resource} />
))}

  
  </OtherResourcesContainer>
  )

}



const OtherResourcersData = [
  {
    img: "chromatic.svg",
    titleButton: "Chromatic",
    alt : "Chromatic",
    link : "https://www.chromatic.com/start",
    moreInfo: moreInfo
},
{
  img: "Vector.png",
  titleButton: "StoryBook",
  alt : "storybook",
  link : "https://storybook.js.org/",
  moreInfo: moreInfo
},

  {
      img: "strapi.svg",
      titleButton: "Strapi",
      alt : "strapi",
      link : "https://github.com/dev-launchers/strapiv4/",
      moreInfo: moreInfo
  },

];


export default OtherResources;
