import axios from "axios";
import React from "react";
import { useUserDataContext } from "../../../../context/UserDataContext";
import {
  UserInterestCard,
  UserInterestsCardContainer,
  UserInterestsContainer,
} from "./StyledUserInterests";

const UserInterests = ({interests}) => {
  const { userData, setUserData } = useUserDataContext();

  const [
    userInterestsUpdateRequestTimeout,
    setUserInterestsUpdateRequestTimeout,
  ] = React.useState();

  // When a user changes their interests, send a request 3 seconds later (3 second buffer for quick back-to-back selection)
  const userInterestsChanged = () => {
    clearTimeout(userInterestsUpdateRequestTimeout);
    setUserInterestsUpdateRequestTimeout(
      setTimeout(() => {
        axios.put(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${userData.id}`,
          { interests: userData.interests },
          { withCredentials: true }
        );
      }, 3000)
    );
  };

  const userHasInterest = (user, interest) =>
    userData?.interests?.filter(
      (userInterest) => userInterest.id === interest.id
    ).length;

  return (
    <UserInterestsContainer>
      {interests?.length > 0 ? (
        <div>
          <h2>What are you interested in?</h2>
          <div
            style={{ color: "white", fontSize: "1.3rem", marginBottom: "2rem" }}
          >
            Select some interests to help us match you with the people and
            content that you love!
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {interests.map((interest) => (
              <UserInterestsCardContainer key={Math.random()}>
                <UserInterestCard
                  className={
                    userHasInterest(userData, interest) ? "selected" : ""
                  }
                  onClick={() => {
                    // Add or remove interest from user
                    const tempUserData = { ...userData }; // Perform shallow copy to allow render retrigger when state is set
                    if (!userHasInterest(userData, interest))
                      tempUserData.interests.push(interest);
                    else {
                      tempUserData.interests.splice(
                        tempUserData.interests.findIndex(
                          (userInterest) => userInterest.id === interest.id
                        ),
                        1
                      );
                    }
                    setUserData(tempUserData);
                    userInterestsChanged();
                  }}
                >
                  {interest.interest}
                </UserInterestCard>
              </UserInterestsCardContainer>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </UserInterestsContainer>
  );
};

export default UserInterests;
