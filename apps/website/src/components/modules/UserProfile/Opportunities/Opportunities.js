import React from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

import { useEffect } from 'react'

import Button from "../../../common/Button";
import Card from "../../../common/Card";

import { env } from "../../../../utils/EnvironmentVariables";

import { useUserDataContext } from "../../../../context/UserDataContext";

import { OpportunitiesContainer } from "./StyledOpportunities";

import PositionCard from '@devlaunchers/components/components/organisms/cards/PositionCard';


const Opportunities = ({ opportunities }) => {

  return (
    <OpportunitiesContainer>
      {opportunities?.length > 0 ? (
        <div>
          <h3>Recommended Opportunities For You</h3>
          <div style={{ fontSize: "1.3rem", marginBottom: "2rem" }}>
            Contribute to a Dev Launchers project to build impactful products
            alongside others and gain experience that will carry you forward
            into your goals!
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {opportunities.map((opportunity) => {
              const { benifits, imgUrl, level, skills, description, title, commitmentHoursPerWeek, expectations } = opportunity;

              return (
                <div
                  key={Math.random()}
                  style={{
                    width: "90%",
                    marginTop: ".5rem",
                    backgroundColor: "white",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    paddingBottom: "1rem",
                  }}
                >

                  <PositionCard
                    buttonStyle="a"
                    content={{
                      // benefits: benefits && benefits.map(benefit => benefit.name),
                      expectations: expectations && expectations.map(point => point.expectation),
                      imgUrl: "https://picsum.photos/200/300",
                      level: level,
                      description: description.substring(0, 200) +
                        (description.length > 200 ? "..." : "")
                      ,
                      skills: skills && skills.map(skill => skill.interest),
                      commitmentHoursPerWeek: `${commitmentHoursPerWeek} hrs/week`,
                      title: title
                    }}
                    interaction="save-only"
                  />
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </OpportunitiesContainer>
  );
};

export default Opportunities;
