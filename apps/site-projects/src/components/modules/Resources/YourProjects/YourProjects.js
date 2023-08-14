import Card from "../../../common/Card";
import { ProjectContainer } from "../../Projects/StyledProjects";
import { InnerProjectContainer, YourProjectsContainer } from "./StyledYourProjects";

function YourProjects({ userProjects, selectedCard, setSelectedCard }) {
    return (
        <YourProjectsContainer>
              <h3>Your Projects</h3>
              <ul>
                {userProjects ? (
                  userProjects.map((project) => {
                    return (
                      <ProjectContainer key={project.id}>
                        <InnerProjectContainer projectid={project.id} selectedcardid={selectedCard.id}>
                          <button onClick={() => setSelectedCard(project)} />
                          <Card
                            isLinkingInside
                            style={{ margin: 0, width: '100%', height: '100%' }}
                            cardData={{
                              id: project.id,
                              title: project.title,
                              secondaryText: `Commitment level: ${project.commitmentLevel}`,
                              tags: project.interests?.map(({ interest }) => interest),
                              description: project.catchPhrase,
                              imageSrc: project?.heroImage?.url,
                            }}
                            />
                        </InnerProjectContainer>
                      </ProjectContainer>
                    );
                  })
                ) : (
                  <p>You don't have any projects available yet!</p>
                )}
              </ul>
            </YourProjectsContainer>
    )
}

export default YourProjects;