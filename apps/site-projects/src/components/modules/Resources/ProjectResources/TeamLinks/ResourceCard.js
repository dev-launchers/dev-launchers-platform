import Image from "next/image";
import Button from "../../../../../../../../packages/UI/src/components/atoms/Button";

function ResourceCard({resource : {img, title, guideTitle,guideLink}}) {
    return <div style={{}}>
        <Image src={`/images/projects/resources/logos/${img}`} width={100} height={100} alt={title}/>
        <Button buttonSize="standard" buttonType="primary">{title}</Button>
        <a href={guideLink} >guide to {guideTitle}</a>
    </div>
}

export default ResourceCard;