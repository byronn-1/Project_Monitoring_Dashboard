import { PROJECT_LIST_TEMPLATE } from "./data/ProjectListData";
import { useState } from "react";
import { ProjectTemplate } from "./data/StorageTypes";

const ProjectList = () => {

  const [viewMoreArray, setViewMoreArray] = useState<boolean[]>([]);

    
  const changeViewMore = (id: number) => {

    if (viewMoreArray[id] === false) {
      setViewMoreArray(viewMoreArray => viewMoreArray.map((oldValue, i) => i === id ? true : oldValue))
    } else {
      setViewMoreArray(viewMoreArray => viewMoreArray.map((oldValue, i) => i === id ? false : oldValue))
    }
  }

  const getProjects = (project: ProjectTemplate) => {

    const result = [];

    if (viewMoreArray.length <= project.projectId) {
      setViewMoreArray(viewMoreArray => [...viewMoreArray, true]);
    }

    result.push(
      <div>
        <div className="list-item-container">
          <div
            className="project-list-item"
            key={`${project.projectId}`}
          >
            <h2 className="project-title">{`${project.name}`}</h2>
            <p className="initial-ideas">{`${project.projectDetails.initialIdeas}`}</p>
            <button className="update-project-btn">Update Project</button>
          </div>
          <button
            className="ViewMore-btn"
            onClick={() => changeViewMore(project.projectId)}
          >
            View More
          </button>
        </div>
        {!viewMoreArray[project.projectId] ? (
          <div
          key={`${project.projectId + project.name}`}
            className="more-info-card"
            style={{ display: viewMoreArray[project.projectId] ? "none" : "flex" }}
          >
            <button>See More Details</button>
            <div className="project-stage-card">
              <div className="project-stage-box">Brief</div>
              <div className="project-stage-box">Spec</div>
              <div className="project-stage-box">Design</div>
              <div className="project-stage-box">Tests</div>
              <div className="project-stage-box">Build</div>
            </div>
            <a href="https://github.com/byronn-1/Project_Monitoring_Dashboard">
              Source Code
            </a>
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
          {PROJECT_LIST_TEMPLATE.map((project) => getProjects(project))}
        </div>
      </div>
    );
  };


export default ProjectList
