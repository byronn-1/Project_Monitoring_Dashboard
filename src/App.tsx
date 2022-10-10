import { useState } from "react";
import "./App.css";
import ProjectList from "./ProjectList";
import { useDispatch } from 'react-redux'
import { ProjectTemplate } from "./data/StorageTypes";
import { useAppSelector } from "./app/store";
import { SHORT_STAGE_NAME_LIST} from './data/ProjectListData';
import { toggleProjectComplete } from "./app/projectsSlice";


function App() {
  

  return (
    <div className="app">
      <header className="page-header">
        <h1 className="page-title">Projects Dashboard</h1>
      </header>
      <ProjectList />
      
      <footer></footer>
    </div>
  );
}

export default App;
