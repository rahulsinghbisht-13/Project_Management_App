import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [task, setTask] = useState("");

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleEnterKeyPress(e) {
    if (e.key === "Enter") {
      handleAddTask();
    }
  }

  function handleAddTask() {
    if (task.trim() !== "") {
      onAdd(task.trim());
    }
    setTask("");
  }

  return (
    <div className=" w-[39rem] flex justify-between items-center mb-4">
      <input
        type="text"
        placeholder="New task..."
        onChange={handleChange}
        onKeyDown={handleEnterKeyPress}
        value={task}
        className="block w-[33.5rem] outline-none rounded-md border-0 py-2 pl-3 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
      />
      <button
        className="px-4 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        onClick={handleAddTask}
      >
        + Task
      </button>
    </div>
  );
}
