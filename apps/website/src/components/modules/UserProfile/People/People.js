import React from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import UserCard from '@devlaunchers/components/components/organisms/cards/UserCard';

import Button from "../../../common/Button";
import Card from "../../../common/Card";

import { env } from "../../../../utils/EnvironmentVariables";

import { useUserDataContext } from "../../../../context/UserDataContext";

import { PeopleContainer } from "./StyledPeople";

const People = ({ people }) => {
  const router = useRouter();
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
            flexWrap: "wrap"
          }}
        >
          {people.map((person) => {
            const { email, profile, discordUsername, id } = person
            return (
              <div
                key={Math.random}
                style={{
                  width: "30%",
                  background: "#dddddd",
                  color: "black",
                  display: "flex",
                  margin: "1rem"
                }}
                onClick={() => {router.push(`/users/public/${id}`)}}
              >
                <UserCard
                  style={{width:"100%"}}
                  user={{
                    bio: 'Member',
                    // discord: {
                    //   id: profile.id,
                    //   username: person.discordUsername ? discordUsername : profile?.displayName
                    // },
                    // email: email,
                    id: id,
                    name: profile?.displayName,
                    profilePictureUrl: profile?.profilePictureUrl
                  }}
                  isVertical
                />
              </div>
            )
          })}
        </div>
      </div>
    </PeopleContainer>
  );
};

export default People;