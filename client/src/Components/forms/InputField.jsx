const InputField = ({
  type,
  placeholder,
  className,
  onDragStart,
  onDragOver,
  onDragLeave,
  onDrop,
  style,
  draggable,
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      style={style}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      {...props}
    />
  );
};

export default InputField;
