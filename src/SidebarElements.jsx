import React from "react";

const SidebarElements = ({element, handleAddElement, handleDragStart}) => {

  return (
    <li className="list-row">
      <div className="list-col-grow">
        <div className="text-xl">{element.label}</div>
        <div className="text-xs uppercase font-semibold opacity-60">
          {element.id} tag
        </div>
      </div>

      <div
        className="list-col-wrap border-dashed border-1 rounded-2xl p-2"
        draggable={true}
        onDragStart={(e) => handleDragStart(e, element)}
      >
        {element.preview}
      </div>
      <button
        className="btn btn-square rounded-3xl btn-ghost"
        onClick={() => handleAddElement(element)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
        </svg>
      </button>
    </li>
  );
};

export default SidebarElements;
