import React, { useState } from "react";

import {
  UserInterestCard,
  UserInterestsCardContainer,
  UserInterestsContainer,
  Bubble
} from "./StyledInterestBubble";
import InterestBubble from ".";

const UserInterestBubble = ({ interests }) => {
  const [selectedInterests, setSelectedInterests] = useState([])

  const clickInterest = (interest) => {
    return () => {
      selectedInterests.includes(interest.id) ?
        setSelectedInterests(selectedInterests.filter(selected_interest => selected_interest !== interest.id)) :
        setSelectedInterests(selected_interests => [...selected_interests, interest.id])
    };
  };

  return (
    <UserInterestsContainer>
      {interests.map((interest) => (
        <Bubble className={selectedInterests.includes(interest.id) ? "selected" : ""}
          onClick={clickInterest(interest)}>
          {interest.name}
        </Bubble>
      ))}
    </UserInterestsContainer>
  );
};

export default UserInterestBubble;


