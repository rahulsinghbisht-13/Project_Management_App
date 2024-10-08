import { useState } from "react";

import NewProject from "./components/NewProject.jsx";
import NoProject from "./components/NoProject.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [newProjectState, setNewProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(enteredTask) {
    setNewProjectState((prevProjectState) => {
      const taskId = Math.random();
      const newTask = {
        task: enteredTask,
        projectId: prevProjectState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevProjectState,
        tasks: [newTask, ...prevProjectState.tasks],
      };
    });
  }

  function handleDeleteTask(taskId) {
    setNewProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        tasks: prevProjectState.tasks.filter((task) => task.id !== taskId),
      };
    });
  }

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

  function handleDeleteProject() {
    setNewProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProjectId: undefined,
        projects: prevProjectState.projects.filter(
          (project) => project.id !== prevProjectState.selectedProjectId
        ),
        tasks: prevProjectState.tasks.filter(
          (task) => task.projectId !== prevProjectState.selectedProjectId
        ),
      };
    });
  }

  const selectedProject = newProjectState.projects.find(
    (project) => project.id == newProjectState.selectedProjectId
  );

  const selectedProjectTasks = newProjectState.tasks.filter(
    (task) => task.projectId === newProjectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDeleteProject={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      taskList={selectedProjectTasks}
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
        selectedProjectId={newProjectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
