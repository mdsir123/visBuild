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
    <div
    style={style}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      {...props}
    >
    <input
      type={type}
      placeholder={placeholder}
      className={className}
    />
    </div>
  );
};

export default InputField;
