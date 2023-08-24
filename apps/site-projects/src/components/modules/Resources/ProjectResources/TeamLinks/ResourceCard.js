
import { ResourcersCards, ResourcersIcon, CardsBtn, ResourcersIconInfo } from "./StyledResourceCard";
import Button from "@devlaunchers/components/src/components/atoms/Button";

function ResourceCard({resource : {img, title, guideTitle,guideLink, moreInfo}}) {
 
    return (
           <ResourcersCards>
            <ResourcersIcon src={`/images/projects/resources/logos/${img}`}  alt={title}/>
            <a href={guideLink} target="_blank">
            <Button buttonSize="standard" buttonType="secondary">{title}</Button>
            </a>

            
            <ResourcersIconInfo src={moreInfo} /> 
            </ResourcersCards>
    );
}

export default ResourceCard;



