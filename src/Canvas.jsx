
import { useState, useContext } from "react";
import { CanvasElementStore } from "./utils/CanvasElementController";


const Canvas = ({ element }) => {
  const [dragOver, setDragOver] = useState(false);
  const { canvasElements, setCanvasElements } = useContext(CanvasElementStore);

  const isValidDrop = (element) => {
    return element.isContainer;
  };

  const findDraggedElement = (canvasElements, draggedId) => {

    for (let el of canvasElements) {
      if (el.id === draggedId) return el;

      if (el.children && el.children.length > 0) {
        let found = findDraggedElement(el.children, draggedId);
        if (found) return found;
      }
    }
    return null;
  };

  const isDescendant = (draggedElement, targetId) => {
 
    if (!draggedElement.children || draggedElement.children.length === 0) {
      return false;
    }

    for (let child of draggedElement.children) {
      if (child.id === targetId || isDescendant(child, targetId)) {
        return true;
      }
    }
    return false;
  };

  const updateElementsById = (canvasElements, targetId, updateFn) => {

    return canvasElements.map((el) => {
      if (el.id === targetId) {
        return updateFn(el);
      }

      if (el.children && el.children.length > 0) {
        return {
          ...el,
          children: updateElementsById(el.children, targetId, updateFn)
        };
      }

      return el;
    });
  };

  const popDraggedElement = (canvasElements, draggedId) => {

    for (let el of canvasElements) {
      if (el.id === draggedId) {
        return { 
          updated: canvasElements.filter(el => el.id !== draggedId), 
          extracted: el 
        };
      }

      if (el.children && el.children.length > 0) {
        const result = popDraggedElement(el.children, draggedId);
        if (result) {
          return {
            updated: canvasElements.map(e=>(e.id === el.id)?{...e,children:result.updated}:e),
            extracted: result.extracted
          };
        }
      }
    }
    return null;
  };

  const onElementDragStart = (e) => {
    e.stopPropagation();
    e.dataTransfer.setData("elementId", element.id);
    e.dataTransfer.effectAllowed = "move";
  };

  const onElementDragOver = (e) => {
    // Only containers should handle drag over
    if (!isValidDrop(element)) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();
    
    setDragOver(true);
    e.dataTransfer.dropEffect = "move";
  };

  const onElementDragLeave = (e) => {

    if (!isValidDrop(element)) return;

    e.preventDefault();
    e.stopPropagation();
    
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setDragOver(false);
    }
  };

  const onElementDrop = (e) => {
    
    if (!isValidDrop(element)) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
    
    const draggedId = e.dataTransfer.getData("elementId");
    
    if (draggedId === element.id) return;

    const draggedElement = findDraggedElement(canvasElements, draggedId);
    
    if (!draggedElement || isDescendant(draggedElement, element.id)) return;

    const result = popDraggedElement(canvasElements, draggedId);
    if (result) {
      const updatedElements = updateElementsById(result.updated, element.id, (el) => ({
          ...el,
          children: [...(el.children || []), result.extracted]
        })
      );
      
      setCanvasElements(updatedElements);
    }
  };

  const Component = element.component;

  const elementStyle = {
    ...element.style,
    ...(dragOver && isValidDrop(element) ? {
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      borderColor: '#3b82f6',
      borderStyle: 'solid'
    } : {})
  };

  return (
    <Component 
      {...element.props}
      style={elementStyle}
      draggable={true}
      onDragStart={onElementDragStart}
      onDragOver={onElementDragOver}
      onDragLeave={onElementDragLeave}
      onDrop={onElementDrop}
    >
      {element.children?.map((child) => (
        <Canvas element={child} key={child.id} />
      ))}
    </Component>
  );
};

export default Canvas


