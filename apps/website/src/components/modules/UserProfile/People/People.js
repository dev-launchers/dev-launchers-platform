import React from "react";
import Image from "next/image";
import { PeopleContainer } from "./StyledPeople";

const People = ({ people }) => {
  return (
    <PeopleContainer people={people}>
        <div>
          <h2>Interesting People</h2>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "space-between",
              justifyContent: "space-around",
              flexWrap:"wrap"
            }}
          >
            {people.map((person) => (
              <div 
                key={Math.random} 
                style={{
                  width:"30%",
                  background:"#dddddd",
                  color:"black",
                  display:"flex",
                  margin:"1rem"
                }}
              >
                <Image 
                  src={person?.profile?.profilePictureUrl} 
                  alt=""
                  width="100%"
                  height="100%"
                />
                <div style={{
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center",
                  margin:"1rem"
                }}>
                  {person?.profile?.displayName}
                </div>
              </div>
            ))}
          </div>
        </div>
    </PeopleContainer>
  );
};

export default People;
