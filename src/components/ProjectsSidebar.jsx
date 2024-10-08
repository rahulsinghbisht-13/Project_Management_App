export default function ProjectsSidebar({
  onCreateNewProject,
  projectsList,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className=" w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <button
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 disabled:bg-stone-800 disabled:text-stone-600 disabled:cursor-not-allowed"
          onClick={onCreateNewProject}
          disabled={selectedProjectId === null}
        >
          + Add Project
        </button>
      </div>
      <ul>
        {projectsList.map((project) => {
          let cssClasses =
            "w-full text-left mt-4 truncate px-4 py-2 text-xs md:text-base rounded-md hover:bg-stone-600 hover:text-stone-50 capitalize disabled:bg-stone-800 disabled:text-stone-600 disabled:cursor-not-allowed";

          if (project.id == selectedProjectId) {
            cssClasses += " bg-stone-600 text-stone-50";
          } else {
            cssClasses += " bg-stone-700 text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
                disabled={selectedProjectId === null}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
