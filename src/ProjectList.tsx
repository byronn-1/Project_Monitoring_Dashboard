import { SHORT_STAGE_NAME_LIST } from "./data/ProjectListData";
import { useState } from "react";

import { ProjectTemplate } from "./data/StorageTypes";
import { useAppSelector } from "./app/store";
import { useDispatch } from 'react-redux'
import { toggleProjectComplete } from "./app/projectsSlice";



const ProjectList = () => {

  const [viewMoreArray, setViewMoreArray] = useState<boolean[]>([]);
  const [currentProjectId, setCurrentProjectId] = useState<number | undefined>();

  
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


  const dispatch = useDispatch();
  const projectListData: ProjectTemplate[]  = useAppSelector(state  => state.project.projects);

  
  const setStageComplete = (shortName: string) => {  
    dispatch(toggleProjectComplete({projectId: currentProjectId, shortName}))
  }

  const getProject = () => {
    return projectListData.find(project => currentProjectId === project.projectId)
  }

  const project = getProject();


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
              onClick={() => setCurrentProjectId(project.projectId)}
            >
              Update Project
            </button>
          </div>
          <button
            className="ViewMore-btn"
            aria-label="ViewMore-btn"
            value={`${project.projectId}`}
            onClick={() => changeViewMore(project.projectId)}
          >View More</button>
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
      {currentProjectId !== undefined && (
        <>
            <div className="modal">
              <h1>{project!.name}</h1>
              <div>
                {SHORT_STAGE_NAME_LIST.map((shortName) =>  <div className=".stage-selection-short" key={shortName} onClick={() => setStageComplete(shortName)}>{shortName}</div>)}
              </div>
              <button onClick={() => setCurrentProjectId(undefined)}>Save</button>
            </div>
            <div className="modal-overlay" />
        </>
      )}
    </div>
  );
};

export default ProjectList;
