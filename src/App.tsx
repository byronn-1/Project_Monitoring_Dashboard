import "./App.css";
import ProjectList from "./ProjectList";
import { Route, Routes } from "react-router-dom";


function App() {

  return (
    <div className="app">
      <Routes>
        <Route
          path="project/:projectId"
          element={<ProjectList />}
        />
      </Routes>
      <header className="page-header">
        <h1 className="page-title">Projects Dashboard</h1>
      </header>
      <ProjectList />
      
      <footer></footer>
    </div>
  );
}

export default App;
