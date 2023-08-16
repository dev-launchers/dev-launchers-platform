
import { ResourcersCards, ResourcersIcon, CardsBtn, ResourcersIconInfo } from "./StyledResourceCard";

function ResourceCard({resource : {img, title, guideTitle,guideLink, moreInfo}}) {
    return (
           <ResourcersCards>
            <ResourcersIcon src={`/images/projects/resources/logos/${img}`}  alt={title}/>
            <a href={guideLink} target="_blank">
            <CardsBtn>{title}</CardsBtn>
            </a>
            <ResourcersIconInfo src={moreInfo} /> 
            </ResourcersCards>
    );
}

export default ResourceCard;



