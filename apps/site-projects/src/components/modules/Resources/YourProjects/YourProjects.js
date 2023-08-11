import Card from "../../../common/Card";
import { ProjectContainer } from "../../Projects/StyledProjects";


function YourProjects({projects}) {
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
                {projects.map((project) => {
                  return (
                    <ProjectContainer key={project.id}>
                      <Card
                        isLinkingInside
                        style={{ margin: 0, width: '100%', height: '100%' }}
                        cardData={{
                          id: project.id,
                          title: project.title,
                          secondaryText: `Commitment level: ${project.commitmentLevel}`,
                          tags: project.interests?.map(({ interest }) => interest),
                          description: project.catchPhrase,
                          href: project.slug,
                          imageSrc: project?.heroImage?.url,
                        }}
                      />
                    </ProjectContainer>
                  );
                })}
              </ul>
            </div>
    )
}

export default YourProjects;