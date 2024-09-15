import { useState } from "react";

import NewProject from "./components/NewProject.jsx";
import NoProject from "./components/NoProject.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";

function App() {
  const [newProjectState, setNewProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleCreateNewProject() {
    setNewProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelClick() {
    setNewProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setNewProjectState((prevProjectState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevProjectState,
        selectedProjectId: undefined,
        projects: [...prevProjectState.projects, newProject],
      };
    });
  }

  let content;

  if (newProjectState.selectedProjectId === undefined) {
    content = <NoProject onCreateNewProject={handleCreateNewProject} />;
  } else if (newProjectState.selectedProjectId === null) {
    content = (
      <NewProject onCancel={handleCancelClick} onSave={handleAddProject} />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onCreateNewProject={handleCreateNewProject}
        projectsList={newProjectState.projects}
      />
      {content}
    </main>
  );
}

export default App;
