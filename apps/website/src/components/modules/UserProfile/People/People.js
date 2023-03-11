import React from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

import Button from "../../../common/Button";
import Card from "../../../common/Card";

import { env } from "../../../../utils/EnvironmentVariables";

import UserCard from '@devlaunchers/components/components/organisms/cards/UserCard';

import { useUserDataContext } from "../../../../context/UserDataContext";

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
            flexWrap: "wrap"
          }}
        >
          {people.map((person) => {
            const { id, bio, email, username, profile } = person
            console.log(person);
            return (
              <div key={id}>
                <UserCard
                  user={{
                    bio: "Member",
                    discord: {
                      id: id,
                      username: username
                    },
                    email: email,
                    id: id,
                    name: username,
                    profilePictureUrl: profile?.profilePictureUrl

                  }}
                  isVertical="true"
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
