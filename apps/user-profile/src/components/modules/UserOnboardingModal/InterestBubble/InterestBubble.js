import React, {useState} from "react";

import {
  UserInterestCard,
  UserInterestsCardContainer,
  UserInterestsContainer,
} from "./StyledInterestBubble";

const UserInterests = () => {
    const interests_list = [
        {id:1, name:"Blockchain"}, {id:2, name:"Javascript"}, {id:3, name:"Web Design"}, 
        {id:4, name:"UI/UX"}, {id:5, name:"React"}, {id:6, name:"QA"}, {id:7, name:"Web Development"}, 
        {id:8, name:"C/C++/C#"}, {id:9, name:"Discord"}, {id:10, name:"Node.js"}, {id:11, name:"Strapi"}, 
        {id:12, name:"Agile Development"}, {id:13, name:"HTML"}, {id:14, name:"Git"}, {id:15, name:"Frontend Development"}, 
        {id:16, name:"Python"}, {id:17, name:"Data Structures"}, {id:18, name:"Prototyping"}, {id:19, name:"Project Management"}]
    
    const [selectedInterests, setSelectedInterests]=useState([])

  return (
    <UserInterestsContainer>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "stretch",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {interests_list.map((interest) => (
              <UserInterestsCardContainer key={interest.id}>
                <UserInterestCard className={selectedInterests.includes(interest.id)?"selected":""} 
                onClick={()=>{selectedInterests.includes(interest.id)?
                setSelectedInterests(selectedInterests.filter(s => s !== interest.id)):
                setSelectedInterests(s => [...s, interest.id])}}>
                {interest.name}
                </UserInterestCard>
              </UserInterestsCardContainer>
            ))}
          </div>
    </UserInterestsContainer>
  );
};

export default UserInterests;


