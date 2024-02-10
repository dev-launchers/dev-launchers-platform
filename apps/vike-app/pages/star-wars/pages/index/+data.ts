// https://vike.dev/data

import fetch from 'cross-fetch';
import type { Movie, MovieDetails } from '../../types';
import agent from "@devlaunchers/utility/agent"
export type Data = Awaited<ReturnType<typeof data>>;

export const data = async () => {
  const response = await fetch('https://apiv4-staging.devlaunchers.org/api/projects');
  const projects = await response.json();
  return projects.data;
  // let projects;
  // try {
  //   projects = await agent.Projects.list()
  // } catch (error) {
  //   console.log(error)
  // }
  // return projects
};
 