import React from "react";
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
                  <a style={{ cursor: "pointer" }} href={`/join/${opportunity.project.slug}`}>{opportunity.title}</a>{" "}
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
