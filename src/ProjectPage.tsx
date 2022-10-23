
import { useParams } from "react-router-dom";

import { ProjectTemplate } from "./data/StorageTypes";
import { useAppSelector } from "./app/store";



const ProjectPage = () => {

    let { projectId } = useParams();

    const projectListData: ProjectTemplate[] = useAppSelector(state => state.project.projects);
    const currentProject = Number(projectId);

    function getProject(){
        return projectListData.find(project => currentProject === project.projectId)
      }

    const project = getProject();
    

  return (
    <>
          <h1>Project: {project!.name}</h1>
      <div>
              <h2>Brief</h2>
              <p>write up</p>
          </div>
          <div>
              <h2>Todo List:</h2>
              <p>write up</p>
          </div>
          <div>
              <h2>Links</h2>
              <p>write up</p>
          </div>
          <div>
              <h2>Spec</h2>
              <p>write up</p>
          </div>
          <div>
              <p>Project Flow box</p>
          </div>
          <div>
              <h2>Design: Brief</h2>
              <p>write up</p>
          </div>
          <div>
              <h2>UX/UI</h2>
              <p>write up</p>
          </div>
          <div>
              <h2>Component Hierarchy</h2>
              <p>write up</p>
          </div>
    </>
  );
};
export default ProjectPage;
