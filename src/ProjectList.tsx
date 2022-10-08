import { SHORT_STAGE_NAME_LIST } from "./data/ProjectListData";
import { useState } from "react";

import { ProjectTemplate } from "./data/StorageTypes";
import { useAppSelector } from "./app/store";


type ProjectListProps = {
  projectListToApp: (id: number) => void
}

const ProjectList = (props: ProjectListProps) => {

  const [viewMoreArray, setViewMoreArray] = useState<boolean[]>([]);
  const projectListData: ProjectTemplate[]  = useAppSelector(state  => state.project.projects);

  const changeViewMore = (id: number) => {
    if (viewMoreArray[id] === false) {
      setViewMoreArray((viewMoreArray) =>
        viewMoreArray.map((oldValue, i) => (i === id ? true : oldValue))
      );
    } else {
      setViewMoreArray((viewMoreArray) =>
        viewMoreArray.map((oldValue, i) => (i === id ? false : oldValue))
      );
    }
  };

  const updateProject = (id: number) => {
    props.projectListToApp(id);

    console.log(`update project for ${id}`);
  };

  const getProjects = (project: ProjectTemplate) => {
    const result = [];

    if (viewMoreArray.length <= project.projectId) {
      setViewMoreArray((viewMoreArray) => [...viewMoreArray, true]);
    }

    result.push(
      <div key={`${project.projectId}`}>
        <div className="list-item-container">
          <div className="project-list-item">
            <h2 className="project-title">{`${project.name}`}</h2>
            <p className="initial-ideas">{`${project.projectDetails.initialIdeas}`}</p>
            <button
              className="update-project-btn"
              onClick={() => updateProject(project.projectId)}
            >
              Update Project
            </button>
          </div>
          <button
            className="ViewMore-btn"
            value={`${project.projectId}`}
            onClick={() => changeViewMore(project.projectId)}
          >
            View More
          </button>
        </div>
        {!viewMoreArray[project.projectId] ? (
          <div key={`${project.projectId + project.name}`}className="more-info-card" style={{display: viewMoreArray[project.projectId] ? "none" : "flex"}}>
            <button>See More Details</button>
            <div className="project-stage-card">
              {SHORT_STAGE_NAME_LIST.map((projectStage, index) =>
              <div key={index}  style={{ backgroundColor: project.projectStages[projectStage].complete ? 'green' : 'red' }} className="project-stage-box">{projectStage}</div> )}
            </div>
            <a href="https://github.com/byronn-1/Project_Monitoring_Dashboard"> Source Code </a>
          </div>
        ) : (
          <div key={`${project.name}`}></div>
        )}
      </div>
    );
    return result;
  };

  return (
    <div className="project-list">
      <div className="scroll">
        {projectListData.map((project) => getProjects(project))}
      </div>
      <div className="modal-overlay" />
    </div>
  );
};

export default ProjectList;
