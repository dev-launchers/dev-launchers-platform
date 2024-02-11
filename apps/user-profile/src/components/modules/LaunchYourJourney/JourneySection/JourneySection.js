import { GroupContainer,IndividualContainer,TextContainer, IconImg, LinkButton } from "./StyledJourneySection";
import { Typography, Button } from '@devlaunchers/components/components/atoms';



/**
 * @description  This component renders the JourneySection Component.
 * You can change the icon image for the section by passing an icon name from "Journey1", "Journey2", "Journey3", "Journey4" and "Journey5".
 * "Journey1" is profile powering, "Journey2" is template creation, "Journey3" is idea space, "Journey4" is learning and "Journey5" is collaboration.
 * @returns 
 */

export function JourneySectionRight({
    iconImg,
    title,
    subtitle,
    buttonTitle,
    clickFunction
}) {



    return(
        <>
            <GroupContainer>
                <IndividualContainer>
                    <IconImg iconImg={iconImg}/>
                    <TextContainer>
                        <Typography type="pLarge" className="journey-text">{title}</Typography>
                        <Typography type="pSmall" className="journey-text">{subtitle}</Typography>
                        <Button onClick={clickFunction} buttonType="alternative" buttonSize="standard" className="journey-button">{buttonTitle}</Button>
                    </TextContainer>
                </IndividualContainer>
            </GroupContainer>
        </>
    );
};

export function JourneySectionLeft({
    iconImg,
    title,
    subtitle,
    buttonTitle,
    clickFunction
}) {
    return(
        <>
            <GroupContainer>
                <IndividualContainer>
                    <TextContainer>
                        <Typography type="pLarge" className="journey-text">{title}</Typography>
                        <Typography type="pSmall" className="journey-text">{subtitle}</Typography>
                        <Button onClick={clickFunction} buttonType="alternative" buttonSize="standard" className="journey-button">{buttonTitle}</Button>
                    </TextContainer>
                    <IconImg iconImg={iconImg}/>
                </IndividualContainer>
            </GroupContainer>
        </>
    );
};