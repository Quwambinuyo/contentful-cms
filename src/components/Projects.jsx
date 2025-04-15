import React from "react";
import { useFetchProject } from "../fetchProjects";

const Projects = () => {
  const { loading, projects } = useFetchProject();
  console.log(projects);

  return <h2></h2>;
};

export default Projects;
