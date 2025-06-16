import React from "react";

const Button= ({
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
    const onSpaceKeyDown = (e) =>{
      if(e.code === 'Space' || e.keyCode === 32 || e.target.contentEditable === true) {
        e.preventDefault()
        const selection = window.getSelection()
        const range = selection.getRangeAt(0)
        range.insertNode(document.createTextNode(' '))
        range.collapse(false)
      }

    }

  return (
    <button className={className} contentEditable={true}
      style={style}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onKeyDown={(e)=>onSpaceKeyDown(e)}
      {...props}>{label}</button>
  );
}

export default Button;
