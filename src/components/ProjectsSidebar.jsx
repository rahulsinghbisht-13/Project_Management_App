export default function ProjectsSidebar({ onCreateNewProject, projectsList }) {
  const classes =
    "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100";

  return (
    <aside className=" w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <button className={classes} onClick={onCreateNewProject}>
          + Add Project
        </button>
      </div>
      <ul>
        {projectsList.map((project) => (
          <li key={project.id}>
            <button className={`${classes} w-full text-left mt-4 truncate`}>
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
