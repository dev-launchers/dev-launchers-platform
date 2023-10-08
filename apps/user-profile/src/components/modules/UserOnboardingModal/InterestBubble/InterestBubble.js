import React, {useState} from "react";

import {
  UserInterestCard,
  UserInterestsCardContainer,
  InterestsField,
  UserInterestsContainer,
} from "./StyledInterestBubble";

const UserInterestBubble = ({interests}) => {    
    const [selectedInterests, setSelectedInterests]=useState([])

    const clickInterest = (interest)=>{
      return () => {
      selectedInterests.includes(interest.id)?
      setSelectedInterests(selectedInterests.filter(selected_interest => selected_interest !== interest.id)):
      setSelectedInterests(selected_interests => [...selected_interests, interest.id])
      };
    };

  return (
    <UserInterestsContainer>
      <InterestsField>
        {interests.map((interest) => (
          <UserInterestsCardContainer key={interest.id}>
            <UserInterestCard className={selectedInterests.includes(interest.id)?"selected":""} 
            onClick={clickInterest(interest)}>
            {interest.name}
            </UserInterestCard>
          </UserInterestsCardContainer>
        ))}
      </InterestsField>
    </UserInterestsContainer>
  );
};

export default UserInterestBubble;


