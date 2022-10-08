import { useState } from "react";
import "./App.css";
import ProjectList from "./ProjectList";
import { useDispatch } from 'react-redux'
import { ProjectTemplate } from "./data/StorageTypes";
import { useAppSelector } from "./app/store";
import { SHORT_STAGE_NAME_LIST} from './data/ProjectListData';
import { toggleProjectComplete } from "./app/projectsSlice";


function App() {
  const [modal, setModalState] = useState<boolean>(false);
  const [currentProjectId, setCurrentProjectId] = useState<number | undefined>();

  const dispatch = useDispatch();
  const projectListData: ProjectTemplate[]  = useAppSelector(state  => state.project.projects);

  
  const setStageComplete = (shortName: string) => {  
    dispatch(toggleProjectComplete({projectId: currentProjectId, shortName}))
  }

  const getProject = () => {
    return projectListData.find(project => currentProjectId === project.projectId)
  }

  const project = getProject();

  return (
    <div className="app">
      <header className="page-header">
        <h1 className="page-title">Projects Dashboard</h1>
      </header>
      <ProjectList projectListToApp={setCurrentProjectId} />
      {currentProjectId != undefined && (
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
      <footer></footer>
    </div>
  );
}

export default App;
