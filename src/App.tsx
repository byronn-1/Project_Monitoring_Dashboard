import "./App.css";
import ProjectList from "./ProjectList";
import { Route, Routes } from "react-router-dom";
import ProjectPage from "./ProjectPage";

function App() {

  return (
    <div className="app">
      <header className="page-header">
        <h1>Work In Progress 22.10.22 </h1>
        <br />
        <h1 className="page-title">Projects Dashboard</h1>
      </header>
      <Routes>
        <Route
          path="/"
          element={<ProjectList />}
        />
        <Route path=":projectId" element={<ProjectPage /> } />
      </Routes>
      <footer></footer>
    </div>
  );
}

export default App;
