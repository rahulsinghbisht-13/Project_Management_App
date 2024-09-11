import NoProjectImage from "../assets/no-projects.png";

export default function NoProject({ onCreateNewProject }) {
  return (
    <div className=" -mt-20 w-screen h-screen flex flex-col justify-center items-center">
      <img src={NoProjectImage} className="w-20" alt="An empty task list" />
      <h2 className=" text-2xl font-bold text-stone-600 mt-5 mb-5">
        No Project Selected
      </h2>
      <p className=" text-xl text-stone-400 mb-10">
        Select a project or get started with a new one
      </p>
      <button
        className="px-6 py-3 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        onClick={onCreateNewProject}
      >
        Create new Project
      </button>
    </div>
  );
}
