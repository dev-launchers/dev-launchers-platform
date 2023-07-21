import Image from "next/image";
import Button from "../../../../../../../../packages/UI/src/components/atoms/Button";
import { ResourceCardContainer } from "./StyledResourceCard";

function ResourceCard({resource : {img, title, guideTitle,guideLink}}) {
    return (
        <ResourceCardContainer>
            <Image src={`/images/projects/resources/logos/${img}`} width={50} height={50} alt={title}/>
            <Button buttonSize="standard" buttonType="primary">{title}</Button>
            <a href={guideLink} >guide to {guideTitle}</a>
        </ResourceCardContainer>
    );
}

export default ResourceCard;