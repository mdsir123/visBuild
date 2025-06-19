import React, { useRef } from "react";

const Button = ({
  label,
  className,
  onDragStart,
  onDragOver,
  onDragLeave,
  onDrop,
  style,
  draggable,
  ...props
}) => {
  const editableRef = useRef(null);

  return (
    <button
      className={className}
      style={style}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      {...props}
    >
      <span
      onClick={(e)=>{        
        e.stopPropagation()
      }}
        ref={editableRef}
        contentEditable
        suppressContentEditableWarning={true}
        spellCheck={false}
        style={{ outline: "none", display: "inline-block", minWidth: "2ch" }}
      >
        {label}
      </span>
    </button>
  );
};

export default Button;
