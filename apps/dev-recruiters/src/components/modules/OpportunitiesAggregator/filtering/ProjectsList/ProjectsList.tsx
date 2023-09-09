import NoProjects from "../NoProjects";
import { ProjectLite } from "@devlaunchers/models/project";
import ProjectListItem from "../ProjectsListItem";
import { List } from "./StyledProjectsList";
import { useEffect } from 'react';

interface Props {
  projects?: ProjectLite[];
  projectsLoaded: boolean;
}

export default function ProjectsList({ projects, projectsLoaded }: Props) {
  if (!projectsLoaded) return <div>loading please wait</div>;
  
  useEffect(() => {
    const allOpportunities = projects.flatMap(
      (project) => project.opportunities
    );
    console.log(allOpportunities);

    const resultadoContagem = contarElementosRepetidos(allOpportunities);
    console.log(resultadoContagem);
  }, []);

  function contarElementosRepetidos(arr) {
    // Criar um objeto vazio para armazenar a contagem dos elementos repetidos.
    const contagemElementos = {};

    //const rolesTitles = arr.map((elemento) => elemento.title);
    //console.log(rolesTitles);

    arr.forEach((elemento) => {
      const title = elemento.title;
      const id = elemento.id;

      if (contagemElementos[title]) {
        contagemElementos[title].quantidade += 1;
      } else {
        contagemElementos[title] = { id, quantidade: 1 };
      }
    });

    const arrayDeObjetos = [];

    for (const title in contagemElementos) {
      if (contagemElementos.hasOwnProperty(title)) {
        const elemento = contagemElementos[title];
        const objeto = { title, ...elemento }; // Spread operator para combinar o título e os dados do elemento.
        arrayDeObjetos.push(objeto);
      }
    }

    // Percorrer o array original usando o foreach.

    // Retornar o objeto contendo a contagem dos elementos repetidos.
    console.log(contagemElementos);
    console.log(arrayDeObjetos);
    return contagemElementos;
  }

  console.log(projects);
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
