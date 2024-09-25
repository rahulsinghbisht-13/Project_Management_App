import { useState } from "react";

import NewProject from "./components/NewProject.jsx";
import NoProject from "./components/NoProject.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

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

  function handleSelectProject(projectId) {
    setNewProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProjectId: projectId,
      };
    });
  }

  const selectedProject = newProjectState.projects.find(
    (project) => project.id == newProjectState.selectedProjectId
  );

  function handleDeleteProject(projectId) {
    const remainingProjects = newProjectState.projects.filter(
      (project) => project.id !== projectId
    );
    setNewProjectState((...prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProjectId: undefined,
        projects: remainingProjects,
      };
    });
  }

  let content = (
    <SelectedProject
      project={selectedProject}
      onDeleteProject={handleDeleteProject}
    />
  );

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
        onSelectProject={handleSelectProject}
        selectedProjectId={newProjectState.projects.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
