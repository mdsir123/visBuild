const Img = ({
  alt,
  src,
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
    <img
      className={className}
      src={src}
      alt={alt}
      style={style}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      {...props}
    ></img>
  );
};

export default Img;
