const Textarea = ({placeholder, className, onDragStart,
  onDragOver,
  onDragLeave,
  onDrop,
  style,
  draggable,
  ...props}) => {
    return (
        <textarea className={className} placeholder={placeholder} tyle={style}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      {...props}/>
    )
}

export default Textarea;    