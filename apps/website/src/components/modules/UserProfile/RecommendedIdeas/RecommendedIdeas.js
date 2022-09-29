import React from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

import Button from "../../../common/Button";
import Card from "../../../common/Card";

import { env } from "../../../../utils/EnvironmentVariables";

import { useUserDataContext } from "../../../../context/UserDataContext";

import {
  RecommendedIdeasContainer,
  RecommendedIdeaCardContainer,
} from "./StyledRecommendedIdeas";

const RecommendedIdeas = ({ img, name, username }) => {
  const { userData } = useUserDataContext();
  const [ideas, setIdeas] = React.useState([]);

  React.useEffect(async () => {
    getIdeaData();
  }, []);

  const getIdeaData = async () => {
    await axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards`)
      .then(({ data }) => {
        if (data) {
          setIdeas(data);
        }
      })
      .catch(() => {
        console.error("Could not fetch idea data");
      });
  };

  return (
    <RecommendedIdeasContainer ideas={ideas}>
      {ideas?.length > 0 ? (
        <div>
          <h2>Recommended Ideas 💡</h2>
          <div
            style={{ color: "white", fontSize: "1.3rem", marginBottom: "2rem" }}
          >
            Have any thoughts on these projects Dev Launchers members may be
            tackling in the near future? Help us make them the best they can be
            with your opinions and feedback!
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            {ideas.map((idea) => (
              <RecommendedIdeaCardContainer key={Math.random()}>
                <Card
                  key={Math.random()}
                  size="small"
                  style={{ width: "90%", height: "17rem" }}
                  noImage
                  cardData={{
                    id: idea.id,
                    title: idea.ideaName,
                    secondaryText: idea.tagline,
                    tags: idea.skills?.map(({ skill }) => skill),
                    description:
                      idea.description.substring(0, 200) +
                      (idea.description.length > 200 ? "..." : ""),
                    href: `https://idea.devlaunchers.org/workshopping/${idea.id}`,
                    // imageSrc: project.heroImage?.url,
                    /*
                                        actions: (
                                            <>
                                            <Link href={`https://devlaunchers.org/projects/${project.slug}`} passHref>
                                                <a>LEARN MORE</a>
                                            </Link>
                                            <Link href="support-us" passHref>
                                                <a>DONATE</a>
                                            </Link>
                                            </>
                                        ),
                                        */
                  }}
                />
              </RecommendedIdeaCardContainer>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </RecommendedIdeasContainer>
  );
};

export default RecommendedIdeas;
