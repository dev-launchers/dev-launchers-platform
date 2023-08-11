import Card from "../../../common/Card";
import { ProjectContainer } from "../../Projects/StyledProjects";

function YourProjects({ userProjects, selectedCard, setSelectedCard }) {
    return (
        <div>
              <h3>Your Projects</h3>
              <ul
                style={{
                  paddingLeft: '0',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.5rem',
                }}
              >
                {userProjects ? (
                  userProjects.map((project) => {
                    return (
                      <ProjectContainer key={project.id}>
                        <div style={{ position: 'relative', width: '100%', height: '100%', border: selectedCard.id == project.id ? '6px solid #3A7CA5' : 'none' }}>
                        <button style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          background: 'transparent',
                          border: 'none',
                          outline: 'none',
                          zIndex: 999,
                          cursor: "pointer",
                          }}
                          onClick={() => setSelectedCard(project)}
                        >
                        </button>
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
                        </div>
                      </ProjectContainer>
                    );
                  })
                ) : (
                  <p>You don't have any projects available yet!</p>
                )}
              </ul>
            </div>
    )
}

export default YourProjects;