import {
  Description,
  Layout,
  ProjectInfo,
  ProjectLinks,
  ProjectContainer,
  Skills,
  Title,
} from "./StyledProjects";

const Projects = ({ projects }) => {
  return (
    <Layout>
      {projects.map((project) => (
        <ProjectContainer>
          <ProjectInfo>
            <Title>{project.name}</Title>
            <Description>
              {project.company.catchPhrase} <b>[Learn More]</b>
            </Description>
          </ProjectInfo>
          <ProjectLinks>
            <i style={{ fontSize: "4rem" }} class="fab fa-github"></i>
            <Skills>React | CSS | Node</Skills>
          </ProjectLinks>
        </ProjectContainer>
      ))}
    </Layout>
  );
};

export default Projects;
