/* eslint-disable react/prop-types */
// import React from "react";
import { useRef, useState } from "react";

function InputForm({ handleAddTask, handleClearField }) {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const titleRef = useRef(null);
  const detailRef = useRef(null);
  const timeRef = useRef(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDetailChange = (e) => {
    setDetail(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col m-2 gap-2 w-5/6">
        <div className="relative">
          <input
            maxLength={40}
            onChange={(e) => handleTitleChange(e)}
            onKeyUp={(e) => {
              if (e.key == "Enter") detailRef.current.focus();
            }}
            type="text"
            ref={titleRef}
            className=" w-full pr-16  px-3 py-3 border-2 border-slate-600 rounded-2xl shadow-violet-300 shadow-md"
            placeholder="Enter Task Title"
          ></input>
          <span className="absolute right-3 text-slate-600 translate-y-3 ">
            {title.length}/40
          </span>
        </div>
        <div className="relative">
          <textarea
            maxLength={500}
            onKeyUp={(e) => {
              if (e.key == "Enter") timeRef.current.focus();
            }}
            onChange={(e) => handleDetailChange(e)}
            ref={detailRef}
            className="w-full pr-16 px-3 py-3 border-2 border-slate-600 rounded-2xl shadow-violet-300 shadow-md"
            placeholder="Enter Task Details"
          ></textarea>
          <span className="absolute  right-3 text-slate-600 translate-y-3 ">
            {detail.length}/500
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            ref={timeRef}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            placeholder="Deadline Time"
            className="sm:w-2/4 p-4 border-2 border-slate-600 rounded-2xl shadow-violet-300 shadow-md"
          ></input>
          <button
            onClick={() => {
              handleAddTask(titleRef, detailRef, timeRef);
            }}
            className="sm:w-1/4 w-4/4 font-semibold px-3 py-3 border-2 bg-slate-500 text-slate-200 border-slate-600 rounded-2xl shadow-violet-500 shadow-md transition duration-300 hover:bg-slate-700 hover:text-slate-200"
          >
            Add Task
          </button>
          <button
            onClick={() => handleClearField(titleRef, detailRef, timeRef)}
            className="sm:w-1/4 w-4/4 hidden sm:block font-semibold px-3 py-3 border-2 border-slate-600 rounded-2xl bg-slate-500 text-slate-50 shadow-violet-300 shadow-md transition duration-300 hover:bg-slate-700 hover:text-slate-200"
          >
            Clear Input
          </button>
        </div>
      </div>
    </>
  );
}

export default InputForm;
