import NoProjects from "../NoProjects";
import { ProjectLite } from "@devlaunchers/models/project";
import ProjectListItem from "../ProjectsListItem";
import { List } from "./StyledProjectsList";

interface Props {
  projects?: ProjectLite[];
  projectsLoaded: boolean;
}

export default function ProjectsList({ projects, projectsLoaded }: Props) {
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
