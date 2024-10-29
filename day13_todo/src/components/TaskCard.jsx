/* eslint-disable react/prop-types */
// import React from "react";

import { useState } from "react";

function TaskCard({ tasks, index, handleMarkDone, handleDeleteTask }) {
  const [hide, setHide] = useState(true);

  const ShowMore = ({ tasksDetail }) => {
    const handleclick = () => {
      setHide((prev) => !prev);
      // console.log(hide);
    };

    return (
      <>
        <span className="transition-all duration-300">
          {hide ? tasksDetail.details.slice(0, 50) : tasksDetail.details}
          {hide ? "" : <br />}
        </span>
        <span
          onClick={handleclick}
          className="text-blue-600 transition-all duration-300 font-bold"
        >
          {hide ? " Show more..." : " Hide details!"}
        </span>
      </>
    );
  };

  return (
    <div
      id={index}
      className={`flex flex-col w-5/6 m-3 p-5 border-2 ${
        tasks.markdone ? "bg-slate-300" : "bg-slate-100"
      } border-slate-600 rounded-2xl shadow-lg transition-colors duration-300`}
    >
      <h5
        className={`text-lg sm:text-xl break-words mb-2 font-bold tracking-tight ${
          tasks.markdone ? "line-through text-gray-700" : "text-gray-900"
        }`}
      >
        {tasks?.title || "Task Title"}
      </h5>

      <p
        className={`mb-4 text-wrap break-words w-full font-normal ${
          tasks.markdone ? "line-through text-gray-500" : "text-gray-700"
        }`}
      >
        {tasks?.details.length > 60 ? (
          <ShowMore tasksDetail={tasks} />
        ) : (
          tasks.details
        )}
      </p>
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => handleMarkDone(index)}
          className="mb-2 px-4 py-2 text-center text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all duration-300"
        >
          {tasks.markdone ? "Mark Not Done" : "Mark Done"}
        </button>
        <button
          onClick={() => handleDeleteTask(index)}
          className={`px-4 py-2 mb-2 text-sm text-center items-center font-medium text-black bg-blue-200 rounded-lg ${
            tasks.markdone
              ? "text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all duration-300"
              : ""
          }`}
        >
          Delete Task
        </button>
      </div>
      <div className="text-xs grid grid-cols-2 gap-3 text-gray-500">
        <span>Created: {tasks.time}</span>
        <span>Deadline: {tasks?.deadline || "{Deadline}"}</span>
      </div>
    </div>
  );
}

export default TaskCard;
