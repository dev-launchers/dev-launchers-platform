import React from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

import Button from "../../../common/Button";
import Card from "../../../common/Card";

import { env } from "../../../../utils/EnvironmentVariables";

import { useUserDataContext } from "../../../../context/UserDataContext";

import PositionCard from '@devlaunchers/components/components/organisms/cards/PositionCard';

import { OpportunitiesContainer } from "./StyledOpportunities";

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
            {opportunities.slice(0, 4).map((opportunity) => {
              const { level, description, title, skills, commitmentHoursPerWeek, project } = opportunity;

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
                      benefits: [
                        'Be proficient in React.js and/or Next.js (strongly prefer both or at least Next)',
                        'Experience with GitHub and version control using Git',
                        'Backend experience preferred, especially using a CMS',
                        'Be able tocommit at least 5 hours a week',
                        'Self-sufficient learner',
                        ' Communicate with us on a weekly basis to see the progress you\'ve been making'
                      ],
                      expectations: [
                        'Be proficient in React.js and/or Next.js (strongly prefer both or at least Next)',
                        'Experience with GitHub and version control using Git',
                        'Backend experience preferred, especially using a CMS',
                        'Be able tocommit at least 5 hours a week',
                        'Self-sufficient learner',
                        ' Communicate with us on a weekly basis to see the progress you\'ve been making'
                      ],
                      imgUrl: project.heroImage.url,
                      level: level,
                      role: description.substring(0, 200) +
                        (opportunity.description.length > 200 ? "..." : ""),
                      tags: skills.map(skill => skill.interest),
                      timeCommittment: `${commitmentHoursPerWeek} hrs per week`,
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
