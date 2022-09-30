import React from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

import Button from "../../../common/Button";
import Card from "../../../common/Card";

import { env } from "../../../../utils/EnvironmentVariables";

import { useUserDataContext } from "../../../../context/UserDataContext";

import { OpportunitiesContainer } from "./StyledOpportunities";

const Opportunities = ({ img, name, username }) => {
  const { userData } = useUserDataContext();
  const [projects, setProjects] = React.useState([]);
  const [opportunities, setOpportunities] = React.useState([]);

  React.useEffect(async () => {
    getProjectData();
  }, []);

  const getProjectData = async () => {
    await axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/projects`)
      .then(({ data }) => {
        if (data) {
          setProjects(data);

          const tempOpportunities = [];
          data.map((project) => {
            project.opportunities.map((opportunity) => {
              opportunity.project = project;
              tempOpportunities.push(opportunity);
            });
          });
          setOpportunities(tempOpportunities);
        }
      })
      .catch(() => {
        console.error("Could not fetch project data");
      });
  };

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
            {opportunities.map((opportunity) => (
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
                <h3 style={{ marginBottom: 0 }}>
                  <a style={{ cursor: "pointer" }}>{opportunity.title}</a>{" "}
                  <span style={{ fontSize: "1rem" }}>
                    ({opportunity.level} Opportunity)
                  </span>
                </h3>
                <div>
                  <span style={{ fontSize: "1rem" }}>Remote</span>
                </div>
                <div>{opportunity.project.title} Project</div>
                <div>
                  <span style={{ fontSize: "1.1rem" }}>
                    {opportunity.description.substring(0, 200) +
                      (opportunity.description.length > 200 ? "..." : "")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </OpportunitiesContainer>
  );
};

export default Opportunities;
