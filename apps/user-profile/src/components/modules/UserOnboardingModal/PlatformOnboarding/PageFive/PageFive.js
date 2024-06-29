import { useOnboardingDataContext } from './../../../../../context/OnboardingDataContext';

import { Typography } from "@devlaunchers/components/components/atoms";
import { PageFiveContainer, Header, Bubble, UserInterestsContainer } from './StyledPageFive';
import UserInterestBubble from '../../InterestBubble';
import { onboardingActions } from './../../../../../state/actions';
import { useEffect, useState } from 'react';

export default function PageFive() {
    const { onboardingData, dispatch } = useOnboardingDataContext();
    const [interestList, setInterestList] = useState(onboardingData.user.interest);

    function onSelectedInterest(selectedInterest) {
        return () => {
            if (hasId(selectedInterest.id)) {
                const updateInterests = updateInterestList(selectedInterest.id)
                setInterestList(updateInterests);
                dispatch({ type: onboardingActions.SET_USERS_INTEREST, data: updateInterests });
            }
        };
    };

    function hasId(idToLookFor) {
        let idFound = false;
        interestList.forEach((interest) => {
            if (interest.id == idToLookFor) {
                idFound = true;
            }
        });
        return idFound;
    }

    function updateInterestList(idToUpdate) {
        // deep copy array
        const newList = JSON.parse(JSON.stringify(interestList));
        newList.forEach((interest) => {
            if (interest.id == idToUpdate) {
                interest.selected = !interest.selected;
            }
        });
        console.log("NEW LIST: ", newList)
        return newList;
    }

    return (
        <PageFiveContainer>
            <Header>
                <div>
                    <Typography type="p" >ABOUT YOU</Typography>
                    <Typography type="h3" >Select Your Interests Below</Typography>
                </div>
                <Typography className="margin-0 modal-subtitle" type="p">We’ll use this to help you find projects that match your needs</Typography>
            </Header>
            <UserInterestsContainer>
                {interestList.map((interest) => (
                    <Bubble className={interest.selected ? "selected" : ""} key={interest.id}
                        onClick={onSelectedInterest(interest)}>
                        {interest.name}
                    </Bubble>
                ))}
            </UserInterestsContainer>


        </PageFiveContainer>
    );
}