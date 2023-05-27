import NoProjects from "../NoProjects";
import { ProjectLite } from "@devlaunchers/models/project";
import ProjectListItem from "../ProjectsListItem";
import { List } from "./StyledProjectsList";



export default function ProjectsList({ projects, projectsLoaded }) {
  if (!projectsLoaded) return <div>loading please wait</div>;
  return (
    <List>
      {projects && projects.length > 0 ? (
        projects.map((project) => (
          <li key={project.id}>
            <ProjectListItem project={project} />
          </li>
        ))
      ) : (
        <NoProjects />
      )}
    </List>
  );
}
