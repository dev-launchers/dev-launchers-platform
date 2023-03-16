import React from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

import Button from "../../../common/Button";
import Card from "../../../common/Card";

import { env } from "../../../../utils/EnvironmentVariables";

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
          {people.map((person) => (
            <div
              key={Math.random}
              style={{
                width: "30%",
                background: "#dddddd",
                color: "black",
                display: "flex",
                margin: "1rem"
              }}
            >
              <Image
                src={person?.profile?.profilePictureUrl}
                alt=""
                width="100%"
                height="100%"
              />
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "1rem"
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